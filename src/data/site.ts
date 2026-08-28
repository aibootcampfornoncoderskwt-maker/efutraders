const phones = {
  kw: import.meta.env.PUBLIC_KUWAIT_PHONE || '+965 6507 1368',
  ae: import.meta.env.PUBLIC_UAE_PHONE || '+971 55 753 5639',
  in: import.meta.env.PUBLIC_INDIA_PHONE || '+91 85898 84138'
};
const digitsOnly = (value: string) => value.replace(/\D/g, '');
const telNumber = (value: string) => `+${digitsOnly(value)}`;

export const company = {
  name: 'EFU Goods Traders',
  shortName: 'EFU',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'sales@efutraders.com',
  countries: {
    kw: { name: 'Kuwait', phone: phones.kw, tel: telNumber(phones.kw), whatsapp: digitsOnly(import.meta.env.PUBLIC_KUWAIT_WHATSAPP || '96565071368') },
    ae: { name: 'UAE', phone: phones.ae, tel: telNumber(phones.ae), whatsapp: digitsOnly(import.meta.env.PUBLIC_UAE_WHATSAPP || '971557535639') },
    in: { name: 'India', phone: phones.in, tel: telNumber(phones.in), whatsapp: '' }
  }
};

export const services = [
  { slug:'business-wifi', icon:'wifi', title:'Business Wi-Fi', short:'Professionally planned routers, access points and wireless coverage for offices, villas and commercial facilities.', features:['Coverage planning','Access point installation','Mesh and roaming setup'] },
  { slug:'structured-cabling', icon:'cable', title:'Structured Cabling', short:'Organised Cat6, Cat6A and fibre infrastructure with cabinets, patch panels, labelling and testing.', features:['Cat6 and Cat6A','Fibre optic runs','Testing and labelling'] },
  { slug:'cctv-surveillance', icon:'camera', title:'CCTV & Surveillance', short:'Wired and IP surveillance solutions designed around site coverage, monitoring and security requirements.', features:['IP and wired CCTV','NVR/DVR configuration','Remote viewing setup'] },
  { slug:'voip-pbx', icon:'phone', title:'VoIP & PBX', short:'Business voice, IP phone and telephone exchange solutions for efficient internal and external communication.', features:['IP-PBX systems','IP phone deployment','System migration'] },
  { slug:'network-security', icon:'shield', title:'Network Security', short:'Firewall, VPN, segmentation and secure connectivity solutions based on operational requirements.', features:['Firewall deployment','VPN configuration','Network segmentation'] },
  { slug:'installation-support', icon:'support', title:'Installation & Support', short:'On-site installation, configuration, troubleshooting, upgrades and continuing technical assistance.', features:['On-site installation','Troubleshooting','Maintenance and upgrades'] }
];

export const products = ['Network switches & routers','Wireless access points','SFPs & transceivers','Fibre & copper products','Network cabinets & racks','CCTV cameras & recorders','PBX systems & IP phones','Testing tools','Microwave & satellite products','IT & office equipment'];
export const trading = ['Civil & construction materials','Agricultural products','Coconut products','Spices, fruits & vegetables','Mechanical equipment & components','General sourcing & supply'];
export const industries = ['Corporate offices','Villas & residences','Retail & hospitality','Warehouses & industry','Education','Healthcare','Construction & contracting'];

export function breadcrumbList(items: { name: string; url: string }[], site: string | URL | undefined) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.url, site).toString()
    }))
  };
}

export const faq = [
  ['Do you provide both equipment and installation?','Yes. EFU can support product supply, installation, configuration and handover based on the requirements of each project.'],
  ['Can EFU conduct a site survey?','Yes. Contact the local team to arrange a survey and confirm its scope, availability and any applicable charges.'],
  ['Do you support villas and commercial properties?','EFU provides solutions for residences, offices, shops, warehouses and other commercial environments.'],
  ['Can you upgrade an existing network?','Yes. The team can assess existing cabling, wireless coverage and active equipment before recommending an upgrade path.'],
  ['Do you install Cat6, Cat6A and fibre cabling?','EFU supports structured copper and fibre cabling, subject to the site requirements and selected specification.'],
  ['How can I request a quotation?','Choose your country, send the project details through the quotation form or contact the local EFU team through WhatsApp or phone.']
];
