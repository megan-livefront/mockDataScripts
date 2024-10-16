import { OCApi } from "../../api-types";

export const condition: OCApi.Schemas.Condition = {
  conditionDetails: {
    heading: `Find treatment for {{urlParam 'conditionLegacy'}}`,
    description: `A description of the condition {{urlParam 'conditionLegacy'}}`,
    ctaButton: `Questionnaire for {{urlParam 'conditionLegacy'}}`,
    label: "{{urlParam 'conditionLegacy'}}",
    urlSlug: "{{urlParam 'conditionLegacy'}}",
    name: "{{urlParam 'conditionLegacy'}}",
    commonName: "{{urlParam 'conditionLegacy'}}",
  },
  treatmentOptions: [
    {
      perksId: "e82bfafb-eca1-4711-9156-b0f9fc8b54a7",
      commonName: "Minoxidil",
      urlSlug: "minoxidil",
      formulationId: "84b18721-2493-4a31-a5ad-4d81dc1647e4",
      price: {
        amount: "8.50",
        currency: "USD",
        display: "$8.50",
      },
      quantity: 30,
      drugType: "BRAND",
      description:
        "This medicine is an HMG-CoA reductase inhibitor (also known as a statin) used in combination with...",
    },
  ],
};
