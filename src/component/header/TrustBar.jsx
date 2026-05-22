// TrustBar.jsx — Bottom trust badge row

import { TRUST_BADGES } from './heroData';
import { ICON_MAP } from './TrustIcons';
import styles from '../../css/Hero.module.css';

const TrustBar = () => {
  return (
    <div className={styles.trustBar}>
      {TRUST_BADGES.map((badge) => {
        const Icon = ICON_MAP[badge.icon];
        return (
          <div key={badge.id} className={styles.trustItem}>
            <div className={styles.trustIcon}>
              {badge.imageSrc ? (
                <img
                  src={badge.imageSrc}
                  alt=""
                  style={{ width: 34, height: 34, objectFit: 'contain' }}
                />
              ) : (
                Icon && <Icon />
              )}
            </div>
            <span className={styles.trustLabel}>{badge.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBar;
