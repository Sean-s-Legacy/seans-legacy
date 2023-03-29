import React, { useEffect, useState } from "react";
import { Typography, Button, Space, Spin } from "antd";
import Image from "next/image";

import styles from "@/styles/index.module.css";

import Mentors from "../components/Mentors/index";
import ImageSlider from "../components/ImageSlider/index";
import WaveSection from "@/components/WaveSection";
import SignUpModal from "@/components/SignUpModal";
import LoginBtn from "@/components/LoginBtn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// firebase
import firebase, { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase/utils";

import { useRouter } from "next/router";
import Dashboard from "./dashboard";
import { AppLayout } from "@/components/Layout/AppLayout";
const { Title, Text } = Typography;

export default function Home() {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [pending, setPending] = useState(true);

  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setPending(false);
      console.log("index", user);
      if (user) {
        console.log("user is logged in !");
        console.log("user : ", user);
        console.log(user.uid);
        setUser(user);
      } else {
        setUser(null);
        console.log("user is signed out !");
      }
    });
    return unsubscribe;
  }, []);

  if (pending) {
    return (
      <div className="spinner-">
        <Spin spinning={pending} />
      </div>
    );
  }
  if (user) {
    router.push("/app");
    return (
      <div className="spinner-">
        <Spin spinning={pending} />
      </div>
    );
  }
  return (
    <>
      <AppLayout user={user}>
        <>
          <div>
            <section className={styles.heroSection}>
              <Image
                alt="Woman sitting on a couch in front of her laptop, smiling"
                src={"/images/index/hero.png"}
                className={styles.heroImg}
                width={850}
                height={778}
                // fill
              />
              <div className={styles.heroSectionHeading}>
                <Title className="bold textPrimary8">
                  Sean’s Legacy <br /> Mentorship Program
                </Title>
                <div className="space-5 vertical">
                  <Text className="mediumWeight textLarge">
                    Wherever you are on your journey,
                    <br />a mentor can help you take the next step.
                  </Text>

                  <Space wrap>
                    <Button type="primary" size="large">
                      Sign up
                    </Button>
                    <Button size="large">Learn more</Button>
                  </Space>
                </div>
              </div>
            </section>
            <section className={styles.transitionSection}>
              <div className={styles.transitionSectionContainer}>
                <Text className="mediumWeight textLarge textInverse">
                  At Sean’s Legacy, we’re dedicated to providing support for
                  LGBTQIA+ youth in their academic and extracurricular
                  endeavors. Whether you’re thinking about going to college,
                  looking for your first job, or just need some support and
                  guidance, our online community of LGBTQIA+ mentors is here to
                  help.
                </Text>
              </div>
            </section>

            <section className={styles.promotionalSection}>
              <div className={styles.promotionalSectionWrapper}>
                <div>
                  <Title
                    level={2}
                    className="bold textAlignCenter textPrimary7"
                  >
                    Why sign up as a mentee?
                  </Title>
                </div>

                <div className={styles.imgWrapper}>
                  <Image
                    alt="100% free - No subscription is needed and completely ad-free."
                    width={368}
                    height={320}
                    src="/images/index/promotional-1.png"
                  />

                  <Image
                    alt="Focused on you - Find a trusted mentor who fits your interests and career goals.  "
                    width={368}
                    height={320}
                    src="/images/index/promotional-2.png"
                  />

                  <Image
                    alt="Designed for privacy - You have full control over what data you provide. "
                    width={368}
                    height={320}
                    src="/images/index/promotional-3.png"
                  />
                </div>
                <div className={styles.btncontainer}>
                  <Button size="large" type="primary">
                    Learn more{" "}
                  </Button>
                </div>
              </div>
            </section>
            {/* <section className={styles.mentorSection}>
              <div className={styles.mentorSectionHeadingContainer}>
                <Title level={2} className="semibold textAlignCenter">
                  Check out some of our mentors
                </Title>
                <Text className="textLarge textAlignCenter">
                  Our mentors are all verified through background checks by
                  Sean&apos;s Legacy. Our mentors are LGBTQIA+ or LGBTQIA+
                  friendly, and they all come from different walks of life and
                  identities to ensure a safe and inclusive connection.
                </Text>
              </div>
              <Mentors />
              <Button type="primary" size="large">
                Find a mentor
              </Button>
            </section> */}
            {/* <WaveSection>
              <Title className="textAlignCenter" level={2}>
                Testimonials
              </Title>
              <ImageSlider />
            </WaveSection> */}
            {/* <section className={styles.instructionsSection}>
              <div className={styles.instructionsSectionWrapper}>
                <Image
                  src={"/images/landing-privacy.jpg"}
                  alt="Girl sitting in front of her laptop with a headset on."
                  height={385}
                  width={565}
                />
                <div className="space-7 vertical">
                  <Title level={2}>
                    Personalized, with your privacy in mind
                  </Title>
                  <Text className="textLarge">
                    Create a profile, tell us what kind of support you’re
                    looking for, and we’ll connect you with a mentor who can
                    help you reach your goals. Book video chat mentorship
                    sessions with them on your own schedule, and don’t worry -
                    your profile can be as private as you want it to be.
                  </Text>
                  <Button type="primary" size="large">
                    Create profile
                  </Button>
                </div>
              </div>
            </section> */}
          </div>
        </>
      </AppLayout>
    </>
  );
}
