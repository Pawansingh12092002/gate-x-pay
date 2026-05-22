// TrustIcons.jsx — SVG icons for the trust badge bar

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const ComplianceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M9 7h6M9 11h6M9 15h4" />
    <circle cx="17" cy="17" r="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" />
    <path d="M16 17l1 1 1.5-1.5" />
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
    <path d="M2 12h2M20 12h2M12 2v2M12 20v2" strokeOpacity="0.4" />
  </svg>
);

const EnterpriseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 1 0 20" />
    <path d="M2 12h20" />
    <path d="M12 2c-2.76 4-4 7-4 10s1.24 6 4 10" />
    <path d="M12 2c2.76 4 4 7 4 10s-1.24 6-4 10" />
  </svg>
);

export const ICON_MAP = {
  shield: ShieldIcon,
  compliance: ComplianceIcon,
  clock: ClockIcon,
  enterprise: EnterpriseIcon,
};

export { ShieldIcon, ComplianceIcon, ClockIcon, EnterpriseIcon };
