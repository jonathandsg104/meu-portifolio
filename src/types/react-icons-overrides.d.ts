declare module "react-icons/*" {
    import { ComponentType, SVGProps } from "react";
  
    export type IconBaseProps = SVGProps<SVGSVGElement> & {
      size?: string | number;
      title?: string;
    };
  
    export type IconType = ComponentType<IconBaseProps>;
  }
  