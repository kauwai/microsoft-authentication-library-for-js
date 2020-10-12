import * as React from "react";
import { MsalProvider, MsalAuthenticationTemplate, InteractionType } from "../src";

import { msalInstance } from "./msalInstance";

export default {
    title: "MSAL React/MsalAuthentication",
};

export const Example = () => {
    return (
        <MsalProvider instance={msalInstance}>
            <p>This page has a component that will only render if you are authenticated.</p>
            <MsalAuthenticationTemplate interactionType={InteractionType.Popup}>
                <ProtectedComponent />
            </MsalAuthenticationTemplate>
        </MsalProvider>
    );
};

const ProtectedComponent: React.FunctionComponent = () => {
    return <b>You are authenticated, which means you can see this content.</b>;
};
