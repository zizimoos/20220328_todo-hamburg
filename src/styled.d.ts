// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgColor: string;
      textColor: string;
      accentColor: string;
      boardColor: string;
      boardSourceColor: string;
      boardDestinationColor: string;
      cardColor: string;
    };
  }
}
