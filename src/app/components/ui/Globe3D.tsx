import dynamic from 'next/dynamic';
import { useResponsiveSize } from '../../hooks/useResponsiveSize';
import { Suspense, useRef } from 'react';
import { ARCS_DATA, RINGS_DATA } from '@/app/constants/globeData';
import type { GlobeMethods } from 'react-globe.gl';

const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
});

export default function Globe3D() {
  const globeSize = useResponsiveSize({
    mobile: 320,
    desktop: 512,
    breakpoint: 640,
  });

  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  const handleGlobeReady = () => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 2;
      }
    }
  };

  return (
    <div className="flex h-80 w-full items-center justify-center sm:h-128">
      <Suspense fallback={<div>Loading...</div>}>
        <Globe
          ref={globeRef}
          height={globeSize}
          width={globeSize}
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere
          globeImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
          onGlobeReady={handleGlobeReady}
          arcsData={ARCS_DATA}
          arcColor={'color'}
          arcStroke={2}
          ringsData={RINGS_DATA}
          ringColor={'color'}
          ringAltitude={0.01}
          ringMaxRadius={5}
          ringResolution={64}
          ringPropagationSpeed={0.8}
          ringRepeatPeriod={2500}
        />
      </Suspense>
    </div>
  );
}
