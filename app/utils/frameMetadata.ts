type FrameButton = {
  label: string;
  action?: "post" | "post_redirect" | "link";
  target?: string;
};

type FrameMetadataType = {
  buttons?: FrameButton[];
  image: {
    src: string;
    aspectRatio?: string;
  };
  postUrl: string;
  state?: string;
};

export function getFrameMetadata(options: FrameMetadataType) {
  const { buttons = [], image, postUrl, state } = options;
  
  const metadata: Record<string, string> = {
    "fc:frame": "vNext",
    "fc:frame:image": image.src,
    "fc:frame:post_url": postUrl,
  };
  
  if (image.aspectRatio) {
    metadata["fc:frame:image:aspect_ratio"] = image.aspectRatio;
  }
  
  if (state) {
    metadata["fc:frame:state"] = state;
  }
  
  buttons.forEach((button, index) => {
    const buttonIndex = index + 1;
    metadata[`fc:frame:button:${buttonIndex}`] = button.label;
    
    if (button.action) {
      metadata[`fc:frame:button:${buttonIndex}:action`] = button.action;
    }
    
    if (button.target) {
      metadata[`fc:frame:button:${buttonIndex}:target`] = button.target;
    }
  });
  
  return metadata;
}
