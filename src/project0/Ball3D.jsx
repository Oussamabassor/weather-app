import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Ball3D() {
    return (
        <main>
            <Spline scene="https://prod.spline.design/og8FdWDE-1bgOqvP/scene.splinecode" />
        </main>
    );
}
