import React from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Card, CardContent } from "@mui/material";

const brandData = {
  nike: {
    name: "Nike",
    banner: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    discount: "Flat 30% OFF",
    description:
      "Nike gift cards are the perfect choice for sportswear lovers. Redeem online or in-store.",
  },
  adidas: {
    name: "Adidas",
    banner: "https://images.unsplash.com/photo-1528701800489-20be3c1ea3dc",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    discount: "Flat 25% OFF",
    description:
      "Shop Adidas footwear, clothing & accessories using gift cards.",
  },
};

const BrandPage = () => {
  const { brandSlug } = useParams();
  const brand = brandData[brandSlug];

  if (!brand) {
    return <Box sx={{ p: 6, textAlign: "center" }}>Brand not found 😕</Box>;
  }

  return (
    <Box>
      {/* ================= BANNER ================= */}
      <Box
        sx={{
          height: { xs: 220, md: 320 },
          backgroundImage: `url(${brand.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            px: { xs: 2, md: 6 },
            color: "#fff",
          }}
        >
          <Box>
            <Box
              component="img"
              src={brand.logo}
              alt={brand.name}
              sx={{ width: 140, mb: 2, filter: "invert(1)" }}
            />
            <Box sx={{ fontSize: "2rem", fontWeight: 700 }}>
              {brand.discount}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ================= CONTENT ================= */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Box sx={{ fontSize: "1.4rem", fontWeight: 700, mb: 2 }}>
              {brand.name} Gift Cards
            </Box>

            <Box sx={{ color: "text.secondary", mb: 3 }}>
              {brand.description}
            </Box>

            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#ff3d00",
                "&:hover": { backgroundColor: "#e63600" },
              }}
            >
              Buy Gift Card
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default BrandPage;
