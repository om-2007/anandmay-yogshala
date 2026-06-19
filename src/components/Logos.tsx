/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
}

/**
 * High-fidelity, custom-rendered vector silhouette of the Anandmay Yogshala logo.
 * It features a bright orange textured fluid circle with the pristine white silhouette
 * of an aligned meditating yogi in the lotus (padmasana) posture with a draped shawl.
 */
export function AnandmayLogo({ className = 'w-10 h-10', size }: LogoProps) {
  const sizeStyle = size ? { width: size, height: size } : {};
  return (
    <img
      src="/anandmay_logo.png"
      alt="Anandmay Yogshala Logo"
      className={className}
      style={{ ...sizeStyle, objectFit: 'contain' }}
    />
  );
}

/**
 * Official SkillWave logo with brand-approved design and tagline.
 */
export function SkillWaveLogo({ className = 'h-10' }: { className?: string }) {
  return (
    <img
      src="/skillwave-logo.png"
      alt="SkillWave - Step Up. Stand Out."
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
