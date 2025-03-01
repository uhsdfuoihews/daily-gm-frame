import { NextRequest, NextResponse } from 'next/server';

// Replace with your image URL
const IMAGE_URL = 'https://res.cloudinary.com/dsjgj0vma/image/upload/v1740849866/good_morning_rjbsdo.png';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Parse the request body
    const body = await req.json();
    
    // Get the Farcaster user ID if available
    const fid = body.untrustedData?.fid || 'unknown';
    
    // Return the response frame
    return NextResponse.json({
      image: IMAGE_URL,
      title: "Thanks for the gm!",
      description: `User ${fid} said gm. Have a great day!`,
      buttons: [
        {
          label: "Share your gm",
          action: "post"
        }
      ],
    });
  } catch (error) {
    console.error('Error processing frame request:', error);
    
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
