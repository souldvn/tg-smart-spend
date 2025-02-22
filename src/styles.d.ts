declare module "*.module.scss" {
  const styles: Record<string, string>;
  export default styles;
}

declare module "*.svg" {
  import React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  const src: string;
  export default src;
}
