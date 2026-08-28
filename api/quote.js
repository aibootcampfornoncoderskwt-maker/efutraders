const countryRecipients = {
  Kuwait: process.env.KUWAIT_LEAD_EMAIL,
  'United Arab Emirates': process.env.UAE_LEAD_EMAIL,
  India: process.env.INDIA_LEAD_EMAIL
};

const clean = (value = '') => String(value).trim().replace(/[<>]/g, '');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  if (body.website) return res.status(200).json({ ok: true });
  const name = clean(body.name); const email = clean(body.email); const phone = clean(body.phone);
  const country = clean(body.country); const service = clean(body.service); const product = clean(body.product); const message = clean(body.message);
  if (!name || !email || !phone || !country || !service || !message || message.length > 5000) return res.status(400).json({ error: 'Please complete all required fields.' });
  if (product.length > 160) return res.status(400).json({ error: 'Please select a valid product category.' });
  if (!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ error: 'Please enter a valid email address.' });
  if (!process.env.RESEND_API_KEY) return res.status(503).json({ error: 'Email delivery is not configured.' });
  const recipient = countryRecipients[country] || process.env.CONTACT_TO_EMAIL;
  if (!recipient) return res.status(503).json({ error: 'The selected country contact is not configured.' });
  const productLine = product ? `\nProduct category: ${product}` : '';
  const response = await fetch('https://api.resend.com/emails', { method:'POST', headers:{'Authorization':`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'}, body:JSON.stringify({from:process.env.CONTACT_FROM_EMAIL,to:[recipient],reply_to:email,subject:`EFU website enquiry: ${service} — ${country}`,text:`Name: ${name}\nCompany: ${clean(body.company)}\nPhone: ${phone}\nEmail: ${email}\nCountry: ${country}\nService: ${service}${productLine}\n\nProject details:\n${message}`}) });
  if (!response.ok) return res.status(502).json({ error: 'We could not send your enquiry. Please use WhatsApp or call EFU.' });
  return res.status(200).json({ ok: true });
}
