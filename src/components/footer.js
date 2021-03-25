import React from 'react';
function Footer() {
    return (<footer>
    <div   className="Flex footerContainer">
	<div  className="Flex footerSubContainer" >
		<div   className="Flex footerSub2" >
			<div className="Flex footerCopyright-container">
				<span  className="footerCopyright-text" >© Copyright Arab Bank.</span>
			</div>
			<div  className="Flex termConditions-container" >
				<a target="_blank" href="#" className="termsContions-text1">Terms &amp; Conditions</a>
				<span className="termsContions-separater"> | </span>
				<a target="_blank" href="#" className="termsContions-text2">Privacy Policy</a>
			</div>
		</div>
	</div>
</div>
</footer>  );
  }
 
export default Footer;