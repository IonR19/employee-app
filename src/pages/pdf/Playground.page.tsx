import React, { forwardRef, useRef } from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";

interface Props {}

const Template = () => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>Section #1</Text>
          <Text>Section #1</Text>
          <Text>Section #1</Text>
          <Text>Section #1</Text>
        </View>
      </Page>
      <Page size="A4">
        <View>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

const Playground = (props: Props) => {
  return (
    <>
      <PDFDownloadLink document={<Template />}>
        <button className="button is-primary">Download</button>
      </PDFDownloadLink>
    </>
  );
};

export default Playground;
