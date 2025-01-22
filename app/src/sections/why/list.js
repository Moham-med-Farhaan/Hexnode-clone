import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AchievementsCard from "../../components/achievements";
import WhyHexnodeCard from "../../components/why-hexnode-card";
import AdaptLogo from "../../components/adapt-logo";
import SecurityLogo from "../../components/security-logo";
import AutomationLogo from "../../components/auto-logo";
import PolicyLogo from "../../components/policy-logo";

function WhyUs() {
  const [visible, setVisible] = useState(false);
  const [securityVisible, setSecurityVisible] = useState(false);
  const [autoVisible, setAutoVisible] = useState(false);
  const [pvisible, setPVisible] = useState(false);
  return (
    <Stack
      p={2}
      gap={2}
      height={"100%"}
      justifyContent={"space-between"}
      alignItems={"space-between"}
    >
      <Stack
        flexDirection={"row"}
        width={"100%"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        {" "}
        <Typography
          sx={{ color: "black" }}
          letterSpacing={2}
          textAlign={"center"}
          fontWeight={600}
          fontSize={50}
          variant="h5"
        >
          Why Hexnode?
        </Typography>
      </Stack>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        width={"100%"}
        spacing={2}
      >
        <WhyHexnodeCard
          visible={visible}
          enterCb={() => {
            setVisible(true);
          }}
          leaveCb={() => {
            setVisible(false);
          }}
          actionArea={
            <Typography color="error">Try hexnode on your endpoints</Typography>
          }
          title={
            <Stack
              flexDirection={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Stack flexDirection={"row"} justifyContent={"center"}>
                <AdaptLogo />
              </Stack>
              <Stack flexDirection={"row"} justifyContent={"center"}>
                <Typography
                  sx={{ color: "black" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontWeight={500}
                  variant="h5"
                >
                  Adapt to the new World
                </Typography>
              </Stack>
            </Stack>
          }
          content={
            <Typography
              sx={{ color: "black", textAlign: "left" }}
              flexWrap={"wrap"}
            >
              Hybrid, remote or onsite, you can trust Hexnode UEM to deliver.
              Create policies that cater to your organization’s protocols.
              Whether it be BYOD, COPE, or platform limited, Hexnode can manage
              it all.
            </Typography>
          }
        />
        <WhyHexnodeCard
          visible={securityVisible}
          enterCb={() => {
            setSecurityVisible(true);
          }}
          leaveCb={() => {
            setSecurityVisible(false);
          }}
          actionArea={
            <Typography color="error">Try hexnode on your endpoints</Typography>
          }
          title={
            <Stack
              flexDirection={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Stack flexDirection={"row"} justifyContent={"center"}>
                <SecurityLogo />
              </Stack>
              <Stack flexDirection={"row"} justifyContent={"center"}>
                <Typography
                  sx={{ color: "black" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontWeight={500}
                  textAlign={"center"}
                  variant="h5"
                >
                  Zero compromise security
                </Typography>
              </Stack>
            </Stack>
          }
          content={
            <Typography
              sx={{ color: "black", textAlign: "left" }}
              flexWrap={"wrap"}
            >
              Enable full-fledged device encryption, data loss prevention, and
              all-rounded device security with Hexnode UEM. Be at the bleeding
              edge of device security without any compromises.
            </Typography>
          }
        />
        <WhyHexnodeCard
          visible={autoVisible}
          enterCb={() => {
            setAutoVisible(true);
          }}
          leaveCb={() => {
            setAutoVisible(false);
          }}
          actionArea={
            <Typography color="error">Get More Done with Automation</Typography>
          }
          title={
            <Stack
              flexDirection={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Stack flexDirection={"row"} justifyContent={"center"}>
                <AutomationLogo />
              </Stack>
              <Stack flexDirection={"row"} justifyContent={"center"}>
                <Typography
                  sx={{ color: "black", textAlign: "left" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontWeight={500}
                  variant="h5"
                >
                  Get More Done with Automation
                </Typography>
              </Stack>
            </Stack>
          }
          content={
            <Typography
              sx={{ color: "black", textAlign: "left" }}
              flexWrap={"wrap"}
            >
              Hexnode UEM automation features help free up IT’s time spent on
              mundane and repetitive tasks. Do hours’ worth of work in a few
              minutes.
            </Typography>
          }
        />
        <WhyHexnodeCard
          visible={pvisible}
          enterCb={() => {
            setPVisible(true);
          }}
          leaveCb={() => {
            setPVisible(false);
          }}
          actionArea={
            <Typography color="error">Try hexnode on your endpoints</Typography>
          }
          title={
            <Stack
              flexDirection={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Stack flexDirection={"row"} justifyContent={"center"}>
                <PolicyLogo />
              </Stack>
              <Stack flexDirection={"row"} justifyContent={"center"}>
                <Typography
                  sx={{ color: "black" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontWeight={500}
                  variant="h5"
                >
                  Unified Policy Management
                </Typography>
              </Stack>
            </Stack>
          }
          content={
            <Typography
              sx={{ color: "black", textAlign: "left" }}
              flexWrap={"wrap"}
            >
              Create a single policy through Hexnode and apply it on all the
              devices in your organization. Any platform or form factor, achive
              single pane of glass management with Hexnode.
            </Typography>
          }
        />
      </Stack>
    </Stack>
  );
}

export default WhyUs;
