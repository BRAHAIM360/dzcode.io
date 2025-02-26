import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { ErrorBoundary } from "../../components/error-boundary";
import { DocumentDetailsScreen } from "./document-details";
import { DocumentsListScreen } from "./documents-list";

const { Navigator, Screen } = createStackNavigator();

export const Navigation: FC = () => {
  return (
    <ErrorBoundary>
      <Navigator initialRouteName={"documents-list"} headerMode={"none"}>
        <Screen name="documents-list" component={DocumentsListScreen} />
        <Screen name="document-details" component={DocumentDetailsScreen} />
      </Navigator>
    </ErrorBoundary>
  );
};
