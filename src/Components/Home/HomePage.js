import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Link,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "./Homepage.css";

const offerCards = [
  {
    title: "Amazon Gift Card",
    description: "Flat 10% cashback on Amazon vouchers",
  },
  {
    title: "Flipkart Gift Card",
    description: "Save extra 12% on Flipkart gift cards",
  },
  {
    title: "Myntra Gift Card",
    description: "Fashion deals up to 20% OFF",
  },
];

const dropdownOffers = {
  Amazon: "Get 10% cashback on Amazon gift cards",
  Flipkart: "Flat ₹500 OFF on Flipkart vouchers",
  Myntra: "Extra 15% OFF on Myntra vouchers",
};

const images = [
  "https://www.gyftr.com/instantvouchers/_next/image?url=https%3A%2F%2Fcdn.gyftr.com%2Fsmartbuy%2Fhome-banner%2F2026-01-19T12_28_02.333Z-Flipkart-Banner.png&w=1920&q=75",
  "https://miro.medium.com/v2/resize:fit:1400/1*RPJQ0RGtMo_S_5U--faR2A.jpeg",
  "https://www.shutterstock.com/image-photo/portrait-collage-diverse-team-members-600nw-2679670111.jpg",
];

const brands = [
  {
    name: "Nike",
    category: "shoes fashion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    discount: 30,
    link: "/brand/nike",
  },
  {
    name: "Adidas",
    category: "shoes fashion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    discount: 25,
    link: "/brand/adidas",
  },
  {
    name: "Puma",
    category: "shoes fashion",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/PUMA-Logo.png",
    discount: 35,
    link: "/brand/puma",
  },
  {
    name: "Reebok",
    category: "shoes fashion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Reebok_2019_logo.svg",
    discount: 40,
    link: "/brand/reebok",
  },
  {
    name: "New Balance",
    category: "shoes fashion",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/New-Balance-Logo.png",
    discount: 20,
    link: "/brand/new-balance",
  },
  {
    name: "Levi's",
    category: "fashion",
    logo: "https://www.pngkit.com/png/detail/63-637058_levis-logo-png-transparent-logo-levis.png",
    discount: 35,
    link: "/brand/levis",
  },
  {
    name: "Under Armour",
    category: "shoes fashion",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Under-Armour-Logo.png",
    discount: 30,
    link: "/brand/under-armour",
  },
  {
    name: "Apple",
    category: "electronics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    discount: 10,
    link: "/brand/apple",
  },
  {
    name: "Samsung",
    category: "electronics",
    logo: "https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo.png",
    discount: 15,
    link: "/brand/samsung",
  },
  {
    name: "H&M",
    category: "fashion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    discount: 45,
    link: "/brand/hm",
  },
];

const HomePage = ({ searchQuery }) => {
  const [index, setIndex] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("Amazon");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  /* ---------------- Debounce search ---------------- */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery.toLowerCase());
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  /* ---------------- Carousel auto-slide ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- Filter by name + category ---------------- */
  const filteredBrands = brands.filter((brand) =>
    `${brand.name} ${brand.category}`.toLowerCase().includes(debouncedQuery),
  );

  /* ---------------- Highlight helper ---------------- */
  const highlightText = (text, query) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span
          key={i}
          style={{
            backgroundColor: "#ffe58a",
            padding: "0 4px",
            borderRadius: 4,
          }}
        >
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="main-section">
      {/* ================= CAROUSEL ================= */}
      {/* ================= CAROUSEL ================= */}
      <Box
        className="carousel-css-custom"
        sx={{
          width: "100%",
          height: { xs: 240, md: 350 },
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Slides */}
        <Box
          sx={{
            display: "flex",
            height: "100%",
            transform: `translateX(-${index * 100}%)`,
            transition: "transform 0.8s ease-in-out",
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              alt={`slide-${i}`}
              sx={{
                minWidth: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ))}
        </Box>

        {/* -------------------- DOTS -------------------- */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
            zIndex: 10, // 🔹 ensure dots are above images
          }}
        >
          {images.map((_, i) => (
            <Box
              key={i}
              onClick={() => setIndex(i)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: index === i ? "#fff" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                border: "1px solid #fff",
                transition: "0.3s",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ================= FEATURED BRANDS ================= */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
        <Box
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            mb: 4,
            textAlign: "left",
          }}
        >
          {debouncedQuery ? (
            <>
              Search Results for{" "}
              <span style={{ color: "#ff3d00" }}>"{debouncedQuery}"</span>
            </>
          ) : (
            "Featured Brands"
          )}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
            },
            gap: 3,
          }}
        >
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand) => (
              <Box
                key={brand.name}
                component={RouterLink}
                to={brand.link}
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 3,
                    textAlign: "center",
                    backgroundColor: "#fff",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  {/* DISCOUNT */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      backgroundColor: "#ff3d00",
                      color: "#fff",
                      px: 1.2,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                    }}
                  >
                    {brand.discount}% OFF
                  </Box>

                  {/* LOGO */}
                  <Box
                    component="img"
                    src={brand.logo}
                    alt={brand.name}
                    sx={{
                      width: "100%",
                      height: 110,
                      objectFit: "contain",
                      mb: 2,
                    }}
                  />

                  {/* NAME (highlighted) */}
                  <Box sx={{ fontWeight: 600 }}>
                    {highlightText(brand.name, debouncedQuery)}
                  </Box>
                </Box>
              </Box>
            ))
          ) : (
            <Box
              sx={{
                gridColumn: "1 / -1",
                textAlign: "center",
                color: "gray",
                fontSize: "1.1rem",
                mt: 4,
              }}
            >
              No brands found 😕
            </Box>
          )}
        </Box>
      </Box>

      {/* ================= OFFERS SECTION ================= */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {/* LEFT COLUMN – OFFER CARDS */}
          <Box>
            <Box sx={{ fontSize: "1.4rem", fontWeight: 700, mb: 3 }}>
              Popular Card Offers
            </Box>

            <Box sx={{ display: "grid", gap: 3 }}>
              {offerCards.map((offer, index) => (
                <Card
                  key={index}
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ fontWeight: 600, fontSize: "1.1rem", mb: 1 }}>
                      {offer.title}
                    </Box>
                    <Box sx={{ color: "text.secondary", fontSize: "0.95rem" }}>
                      {offer.description}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* RIGHT COLUMN – DROPDOWN + CARD */}
          <Box>
            <Box sx={{ fontSize: "1.4rem", fontWeight: 700, mb: 3 }}>
              Choose Brand Offer
            </Box>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Select Brand</InputLabel>
              <Select
                value={selectedBrand}
                label="Select Brand"
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                {Object.keys(dropdownOffers).map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    {brand}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                backgroundColor: "#f8fafc",
              }}
            >
              <CardContent>
                <Box sx={{ fontWeight: 600, fontSize: "1.1rem", mb: 1 }}>
                  {selectedBrand} Offer
                </Box>
                <Box sx={{ fontSize: "0.95rem", color: "text.secondary" }}>
                  {dropdownOffers[selectedBrand]}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
