import { Metadata } from 'next';
import { getFrameMetadata } from './utils/frameMetadata';

// Replace with your image URL and domain after deployment
const IMAGE_URL = 'YOUR_IMAGE_URL_HERE';
const DOMAIN = 'YOUR_VERCEL_DOMAIN_HERE';

export async function generateMetadata(): Promise<Metadata> {
  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: 'gm',
      }
    ],
    image: {
      src: IMAGE_URL,
      aspectRatio: '1.91:1'
    },
    postUrl: `https://${DOMAIN}/api/frame`,
  });

  return {
    metadataBase: new URL(`https://${DOMAIN}`),
    title: 'Daily gm',
    description: 'Start your day with a gm!',
    openGraph: {
      title: 'Daily gm',
      description: 'Start your day with a gm!',
      images: [IMAGE_URL],
    },
    other: {
      ...frameMetadata,
    },
  };
}

export default function Home() {
  return (
    <main>
      <h1>Daily gm Frame</h1>
      <p>Your frame is ready! Cast this URL to share it.</p>
    </main>
  );
}
