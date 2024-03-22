import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Header,
  Navigation,
  NavigationList,
  NavigationItem,
  NavigationLink,
  Main,
  PlanList,
  ResponsivePlan,
  Error,
  PlanTitle,
  PlanDescription,
  PlanButton,
  Form,
  Label,
  Button,
  Footer,
  CardContainer,
  ResponsiveCard,
  SkipToContent,
  LiveRegion,
} from "./styled";

const InsuranceContainer = () => {
  //misc
  const firstRefCard = useRef(null);

  const [isCardFocused, setIsCardFocused] = useState(false);
  const [quoteRequested, setQuoteRequested] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

  const liveRegionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Announce changes in the live region for screen readers
    if (liveRegionRef.current) {
      liveRegionRef.current.innerText = quoteRequested
        ? `Quote requested for ZIP Code: ${zipCode}`
        : "Please enter a ZIP Code";
    }
  }, [quoteRequested, zipCode]);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
    setError("");
  };

  const handleGetQuote = (event) => {
    event.preventDefault();
    console.log(zipCode);
    if (!zipCode.trim()) {
      setError("Please enter a ZIP Code");
      setQuoteRequested(false);
      return;
    }
    setQuoteRequested(true);
  };

  //func
  const handleSectionClick = (e) => {
    if (firstRefCard.current && firstRefCard.current.contains(e.target)) {
      setIsCardFocused(true);
    } else setIsCardFocused(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      setTimeout(() => {
        if (
          document.activeElement === firstRefCard.current ||
          firstRefCard.current.contains(document.activeElement)
        ) {
          setIsCardFocused(true);
        } else {
          setIsCardFocused(false);
        }
      }, 1);
    }
  };

  //async
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Container>
      <Header>
        <h1>Health Insurance Portal</h1>
      </Header>
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <NavigationLink href="#">Home</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href="#">Plans</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink href="#">Contact</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </Navigation>
      <Main>
        {/* Skip to Content link
                <SkipToContent href="#main-content" onClick={handleSkipToContent}>
                    Skip to Content
                </SkipToContent> */}

        <section id="main-content" tabIndex={-1} aria-label="Main Content">
          <h2>Get a Quote</h2>
          {quoteRequested ? (
            <div>
              <p>Quote requested for ZIP Code: {zipCode}</p>
            </div>
          ) : (
            <Form onSubmit={handleGetQuote}>
              <Label htmlFor="zipCode">Enter ZIP Code:</Label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={zipCode}
                onChange={handleZipCodeChange}
                aria-label="Enter ZIP Code"
                aria-describedby="zipCodeError"
              />
              <Button type="submit">Get Quote</Button>
              {error && (
                <Error>
                  <p id="zipCodeError">&#x26A0; {error}</p>
                </Error>
              )}
            </Form>
          )}
        </section>
        {/* Live region for screen reader announcements */}
        <LiveRegion aria-live="assertive" ref={liveRegionRef} />

        {/*  */}

        <section
          className="available_plan_container"
          onClick={handleSectionClick}
          aria-hidden={!isCardFocused ? "true" : "false"}
        >
          <h2>Available Plans</h2>
          <PlanList>
            <ResponsivePlan>
              <PlanTitle>Basic Health Plan</PlanTitle>
              <PlanDescription>
                Essential coverage for basic health needs.
              </PlanDescription>
              <PlanButton>Select Plan</PlanButton>
            </ResponsivePlan>

            <ResponsivePlan ref={firstRefCard}>
              <PlanTitle>Dental and Vision Options</PlanTitle>
              <PlanDescription>
                Coverage for dental and vision care services.
              </PlanDescription>
              <PlanButton>Select Plan</PlanButton>
            </ResponsivePlan>

            <ResponsivePlan>
              <PlanTitle>Mental Health Support</PlanTitle>
              <PlanDescription>
                Specialized coverage for mental health services.
              </PlanDescription>
              <PlanButton>Select Plan</PlanButton>
            </ResponsivePlan>
            <ResponsivePlan>
              <PlanTitle>Family Wellness Package</PlanTitle>
              <PlanDescription>
                All-in-one coverage for family wellness needs.
              </PlanDescription>
              <PlanButton>Select Plan</PlanButton>
            </ResponsivePlan>
          </PlanList>
        </section>
        {/*  */}
        <section>
          <h2>Featured Plans</h2>
          <CardContainer>
            <ResponsiveCard>
              <h3>Gold Plan</h3>
              <p>Comprehensive coverage with low deductibles.</p>
              <PlanButton>Select Plan</PlanButton>
            </ResponsiveCard>
            <ResponsiveCard>
              <h3>Silver Plan</h3>
              <p>Balanced coverage for your health needs.</p>
              <PlanButton>Select Plan</PlanButton>
            </ResponsiveCard>
            <ResponsiveCard>
              <h3>Bronze Plan</h3>
              <p>Basic coverage for essential health needs.</p>
              <PlanButton>Select Plan</PlanButton>
            </ResponsiveCard>
            <ResponsiveCard>
              <h3>Platinum Plan</h3>
              <p>Premium coverage with additional benefits.</p>
              <PlanButton>Select Plan</PlanButton>
            </ResponsiveCard>
          </CardContainer>
        </section>
      </Main>
      <Footer>
        <p>&copy; 2024 Health Insurance Portal</p>
      </Footer>
    </Container>
  );
};

export default InsuranceContainer;
