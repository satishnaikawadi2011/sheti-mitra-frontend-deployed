export interface DefaultTheme {
	palette: {
		common: {
			black: string;
			white: string;
			/**
			 * Use this for the background color of the body
			 */
			bodyBgColor: string;
			/**
			 * Use this for the backdrop color 
			 */
			backdropColor: string;

			bgCard: string;
		};
		primary: string;
		primaryHoverBg: string;
	};
}
