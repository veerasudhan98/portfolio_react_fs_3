import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  HStack,
  VStack,
  Link,
  IconButton,
  Collapse,
} from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:veerasudhan.p.a@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/veerasudhan98",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/veerasudhan/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@sudhancheckmi98",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/11538294/veera-sudhan",
  },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      handleCloseNav();
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={100} // Set a higher value for the z-index
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={4} // Reduced left and right padding for small screens
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton
            aria-label="Toggle navigation"
            icon={<FontAwesomeIcon icon={faBars} />}
            size="md"
            color="black"
            onClick={handleNavToggle}
            display={{ base: "block", md: "none" }} // Display on small screens, hide on medium and larger
          />
          <HStack
            spacing={4}
            display={{ base: "none", md: "flex" }} // Display on medium and larger screens, hide on small screens
          >
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </Link>
            ))}
          </HStack>
          {/* Projects and Contact links for desktop view */}
          <HStack
            spacing={8}
            display={{ base: "none", md: "flex" }} // Display on medium and larger screens, hide on small screens
          >
            <Link onClick={handleClick("projects")} cursor="pointer">
              Projects
            </Link>
            <Link onClick={handleClick("pricing")} cursor="pointer">
              Pricing
            </Link>
            <Link onClick={handleClick("contactme")} cursor="pointer">
              Contact
            </Link>
          </HStack>
        </HStack>
        {/* Dropdown menu for small screens */}
        <Collapse in={isNavOpen} animateOpacity>
          <VStack
            spacing={2}
            backgroundColor="#18181b"
            py={2}
            color="white"
            zIndex={99} // Set a slightly lower z-index for the dropdown
            boxShadow="md" // Add a subtle shadow
            display={{ base: "block", md: "none" }} // Display on small screens, hide on medium and larger
          >
            {/* "Projects" link for mobile view */}
            <VStack>
              <Link onClick={handleClick("projects")} cursor="pointer">
                Projects
              </Link>
            </VStack>
            {/* "Contact" link for mobile view */}
            <VStack>
              <Link onClick={handleClick("contactme")} cursor="pointer">
                Contact
              </Link>
            </VStack>
          </VStack>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Header;
