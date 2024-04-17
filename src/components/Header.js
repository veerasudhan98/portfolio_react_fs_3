import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
          {/* Dropdown button for "Domain," "Website Hosting," and "Contact" links */}
          <Box position="relative">
            <Link
              onClick={handleNavToggle} // Toggle the dropdown
              cursor="pointer"
              color="white"
              _hover={{ textDecoration: "none" }}
            >
              Menu <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <Collapse in={isNavOpen} animateOpacity>
              <VStack
                spacing={4} // Increased spacing between menu items
                backgroundColor="#18181b"
                py={5}
                width="100px"
                color="white"
                zIndex={99} // Set a slightly lower z-index for the dropdown
                boxShadow="md" // Add a subtle shadow
                position="absolute"
                top="100%"
                left={0}
                // width="100%"
              >
                <Link
                  onClick={() =>
                    window.open("https://172.24.52.62/ecp/", "_blank")
                  }
                  cursor="pointer"
                >
                  Exchange
                </Link>
                <Link
                  onClick={() => window.open("", "_blank")}
                  cursor="pointer"
                >
                  SQL
                </Link>
                <Link
                  onClick={() =>
                    window.open(
                      "http://172.24.52.125/nagiosxi/login.php",
                      "_blank"
                    )
                  }
                  cursor="pointer"
                >
                  Monitoring
                </Link>
                <Link
                  onClick={() =>
                    window.open("https://spchat.group2.local/", "_blank")
                  }
                  cursor="pointer"
                >
                  Zimbra
                </Link>
                <Link
                  onClick={() =>
                    window.open("http://172.24.52.4:55414/#", "_blank")
                  }
                  cursor="pointer"
                >
                  Backup
                </Link>
              </VStack>
            </Collapse>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
