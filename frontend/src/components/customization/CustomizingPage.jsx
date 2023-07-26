import React, { useState } from "react";
import Banner from "../banner/Banner";
import BannerUtilities from "./banner/BannerUtilities";
import NavBarUtilities from "./navbarSettings/NavBarUtilities";
import Navbar from "../navbar/NavBar";
import ProductsCarousel from "../product/ProductsCarousel";
import ProductUtilities from "./product/ProductUtilities";
import PUtilities from "./product/PUtilities";

export default function CustomizingPage() {
  // Banner Customization
  const [bannerData, setBannerData] = useState({
    imageUrl:
      "https://t4.ftcdn.net/jpg/04/28/76/95/360_F_428769564_NB2T4JM9E2xsxFdXXwqW717HwgaZdpAq.jpg",
    color: "",
    overlay: true,
    title: "Welcome to the Jungle",
    titleColor: "white",
    titleSize: "30px",
    titleAlignment: "center",
    titleFont: "Arial, sans-serif",
  });

  const handleBannerUpdate = (updatedData) => {
    setBannerData(updatedData);
  };

  const bannerContainerStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  // Navbar Customization
  const [navBarData, setNavBarData] = useState({
    variant: "default",
    activeColor: "primary",
    signupColor: "primary",
    loginColor: "primary",
    buttonColor: "primary",
  });

  const handleNavBarUpdate = (updatedData) => {
    setNavBarData(updatedData);
  };

  const navBarContainerStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  // Product Customization

  const [productData, setProductData] = useState({
    imageUrl:
      "data:image/jpeg;base64,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",
    color: "white",
    title: "Product Name",
    fontSize: "1rem",
    price: "$400",
    noOfCards: "5",
    isCarousel: false,
    bgColor: "black",
    showDots: false,
  });

  const handleProductUpdate = (updatedData) => {
    setProductData(updatedData);
  };

  const productContainerStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div>
      <h1 className="Customize-page">Customize your website</h1>

      {/* <h2>Banner</h2>
      <br></br>

      <Banner {...bannerData} />
      <BannerUtilities bannerData={bannerData} onUpdate={handleBannerUpdate} /> */}
      <br></br>
      <h2>Navbar</h2>
      <br></br>


      <div style={navBarContainerStyle}>
        <Navbar {...navBarData} />
      </div>
  <NavBarUtilities navBarData={navBarData} onUpdate={handleNavBarUpdate} />
  <br />
       <h2>Banner</h2>
      <Banner {...bannerData} />
      <BannerUtilities bannerData={bannerData} onUpdate={handleBannerUpdate} />
        {/* <Banner {...bannerData} /> 
      </div> 
    </div> 


      <div style={bannerContainerStyle}>
        <Banner {...bannerData} />
      </div>
*/}
      <h2>Product</h2>

      <PUtilities productData={productData} onUpdate={handleProductUpdate} />
      <div style={productContainerStyle}>
        <ProductsCarousel {...productData} />
      </div>

      <ProductUtilities bannerData={bannerData} onUpdate={handleBannerUpdate} />
      <div style={bannerContainerStyle}>
        <ProductsCarousel {...bannerData} />

    </div>
    </div>

  );
}
