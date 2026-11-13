export const plans = {
  cloud: {
    title: 'Cloud server', price: 49,
    description: 'Set up your bot on a cloud server you rent. Choose this if you need a server.',
    details: ['Guided cloud server setup', 'Bot configuration and deployment checklist', 'Cloud hosting billed separately by your provider'],
    field: 'Cloud provider', placeholder: 'For example, DigitalOcean'
  },
  own: {
    title: 'Your own server', price: 29,
    description: 'Set up your bot on a server you already own or manage.',
    details: ['Server readiness checklist', 'Bot configuration and deployment checklist', 'You cover your own server operating costs'],
    field: 'Server operating system', placeholder: 'For example, Ubuntu'
  }
};

export const formatPrice = (plan) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0
}).format(plan.price);

export const cloudTiers = {
  starter: { title: 'Pro', price: 20, os: 'Linux', gpu: 'None', memory: '4 GB RAM', storage: '70 GB', compute: 'Shared CPU', vcpu: '2', outbound: '500 GB / month', inbound: '1 Gbps' },
  standard: { title: 'Plus', price: 50, os: 'Linux', outbound: '1 TB / month (estimated)', inbound: '1 Gbps (estimated)', gpu: 'None', memory: '16 GB RAM', storage: '160 GB SSD', compute: 'Shared CPU', vcpu: '4' },
  performance: { title: 'Max', price: 100, os: 'Linux', outbound: '2 TB / month (estimated)', inbound: '1 Gbps (estimated)', gpu: 'None', memory: '32 GB RAM', storage: '320 GB SSD', compute: 'Shared CPU', vcpu: '8' }
};

export const formatMonthly = (tier) => formatPrice(tier) + '/month';

export const tierSpecs = (tier) => [
  ['Operating system', tier.os], ['Memory', tier.memory], ['vCPU', tier.vcpu],
  ['Storage', tier.storage], ['Outbound', tier.outbound], ['Inbound', tier.inbound],
  ['Compute', tier.compute], ['GPU', tier.gpu]
];
