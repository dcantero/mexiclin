function downloadVCard() {
    var vcardContent =
      "BEGIN:VCARD\n" +
      "VERSION:3.0\n" +
      "N:Cantero;Mariano;;;\n" +
      "FN:Mariano Cantero\n" +
      "ORG:mexiclin\n" +
      "TEL;TYPE=CELL:(609) 941-4579\n" +
      "EMAIL:mexiclin@msn.com\n" +
      "URL:https://mexiclin@msn.com\n" +
      "X-SOCIALPROFILE;type=facebook:https://www.facebook.com/dcanterorealtor\n" +
      "X-SOCIALPROFILE;type=linkedin:https://www.linkedin.com/in/daniel-c-755300180/\n" + // Adding LinkedIn URL
      "X-SOCIALPROFILE;type=instagram:http://www.instagram.com/dcantero.realtor/\n" + // Adding Instagram URL
      "NOTE:Your South Jersey Handiman!\n" + // Adding notes field
      "PHOTO;VALUE=URL;TYPE=JPEG:https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80\n" + // Adding contact image field
      "END:VCARD";

    var vcardBlob = new Blob([vcardContent], { type: "text/vcard" });
    var vcardURL = URL.createObjectURL(vcardBlob);

    var downloadLink = document.createElement("a");
    downloadLink.href = vcardURL;
    downloadLink.download = "mariano-cantero-contact.vcf";
    downloadLink.click();
  }