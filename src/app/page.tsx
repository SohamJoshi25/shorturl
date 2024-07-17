

import HomeFooter from "@/components/homefooter";
import HomeTitle from "@/components/hometitle";
import URLButtons from "@/components/urlbuttons";

export default function Home() {
  return ( 
	<div className="home">
		<HomeTitle/>
		<URLButtons/>
		<HomeFooter/>
	</div> 	
  );
}
