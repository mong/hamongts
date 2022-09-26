import { CmsCollection, CmsConfig, CmsField } from "netlify-cms-core";

const filename: CmsField = {
  label: "Filnavn",
  name: "filename",
  widget: "string",
};

const atlas = (lang: string): CmsCollection => {
  return {
    label: lang === "no" ? "Atlas" : "Engelske atlas",
    name: lang === "no" ? "atlas" : "atlas_eng",
    folder: lang === "no" ? "_posts/atlas" : "_posts/en/v2",
    extension: "json",
    format: "json",
    create: true,
    delete: false,
    media_folder:
      lang === "no"
        ? "/public/img/no/{{filename}}"
        : "/public/img/en/{{filename}}",
    public_folder:
      lang === "no"
        ? "/helseatlas/img/no/{{filename}}"
        : "/helseatlas/img/en/{{filename}}",
    identifier_field: "filename",
    fields: [
      filename,
      {
        label: "Publisert",
        name: "publisert",
        widget: "boolean",
        default: false,
      },
      {
        label: "Publiseringsdato",
        name: "date",
        widget: "datetime",
      },
      {
        label: "Tittel",
        name: "mainTitle",
        widget: "string",
      },
      {
        label: "Kort tittel",
        name: "shortTitle",
        widget: "string",
      },
      {
        label: "Forsidebilde",
        name: "image",
        widget: "file",
        required: false,
      },
      {
        label: "Forsidetekst",
        name: "frontpagetext",
        widget: "string",
        required: false,
      },
      {
        label: "Ingress",
        name: "ingress",
        widget: "string",
      },
      {
        label: "Språk",
        name: "lang",
        widget: "select",
        options: ["nb", "nn", "en"],
        default: lang === "no" ? "nb" : "en",
      },
      {
        label: "Kapittel",
        name: "kapittel",
        widget: "list",
        fields: [
          {
            label: "Overskrift",
            name: "overskrift",
            widget: "string",
            required: false,
          },
          {
            label: "Innhold",
            name: "innhold",
            widget: "list",
            hint: "Selve innholdet i atlaset",
            types: [
              {
                label: "Tekst",
                name: "tekst",
                widget: "object",
                summary: "{{fields.beskrivelse}}",
                fields: [
                  {
                    label: "Beskrivelse",
                    name: "beskrivelse",
                    widget: "string",
                    hint: "Kort beskrivelse, som kun vises som overskrift her (vil ikke vises på nettsiden).",
                    required: false,
                  },
                  {
                    label: "Tekst",
                    name: "tekst",
                    widget: "markdown",
                    hint: "Seksjon med tekst og eventuelle statiske figurer",
                  },
                ],
              },
              {
                label: "Faktaboks",
                name: "faktaboks",
                widget: "object",
                summary: "{{fields.overskrift}}",
                fields: [
                  {
                    label: "Overskrift",
                    name: "overskrift",
                    widget: "string",
                    hint: "Overskrift som vises på siden når resten av teksten er skjult",
                  },
                  {
                    label: "Tekst",
                    name: "tekst",
                    widget: "markdown",
                    hint: "Faktabokstekst som i utgangspunktet er skjult men kan trykkes frem av bruker.",
                  },
                ],
              },
              {
                label: "Resultatboks",
                name: "resultatboks",
                widget: "object",
                summary: "{{fields.overskrift}}",
                fields: [
                  {
                    label: "Overskrift",
                    name: "overskrift",
                    widget: "string",
                  },
                  {
                    label: "Ingress",
                    name: "ingress",
                    widget: "markdown",
                  },
                  {
                    label: "Publiseringsdato",
                    name: "publisert",
                    widget: "datetime",
                  },
                  {
                    label: "Sist oppdatert",
                    name: "oppdatert",
                    widget: "datetime",
                  },
                  {
                    label: "Karusell",
                    name: "data",
                    widget: "file",
                    media_folder: "/public/data",
                    public_folder: "",
                    hint: "Datafil, i json-format, som inneholder definisjon av karusell",
                  },
                  {
                    label: "Utvalgsbeskrivelse",
                    name: "utvalg",
                    widget: "markdown",
                  },
                  {
                    label: "Resultatbeskrivelse",
                    name: "resultat",
                    widget: "markdown",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
};

export const config: CmsConfig = {
  local_backend: true,
  backend: {
    name: "github",
    repo: "mong/hamongts",
    branch: "main",
    base_url: "https://prod-mong-api.skde.org",
  },
  logo_url: "https://www.skde.no/helseatlas/img/logos/helseatlas.svg",
  media_folder: "public/img",
  public_folder: "/helseatlas/img",
  site_url: "https://www.skde.no/helseatlas/",
  locale: "nb_no",
  collections: [
    atlas("no"),
    {
      label: "Tidligere atlas",
      name: "tidligere_atlas",
      folder: "_posts/tidligere_atlas",
      create: false,
      delete: false,
      media_folder: "/public/img/no/{{filename}}",
      public_folder: "/helseatlas/img/no/{{filename}}",
      identifier_field: "mainTitle",
      fields: [
        filename,
        {
          label: "Publiseringsdato",
          name: "date",
          widget: "datetime",
        },
        {
          label: "Publiseringsnummer",
          name: "num",
          widget: "number",
        },
        {
          label: "Tittel",
          name: "mainTitle",
          widget: "string",
        },
        {
          label: "Kort tittel",
          name: "shortTitle",
          widget: "string",
        },
        {
          label: "Forsidebilde",
          name: "image",
          widget: "file",
        },
        {
          label: "Forsidetekst",
          name: "frontpagetext",
          widget: "string",
        },
        {
          label: "Rapport",
          name: "pdfUrl",
          widget: "string",
        },
        {
          label: "Hovedtekst",
          name: "body",
          widget: "markdown",
        },
        {
          label: "Instant atlas?",
          name: "ia",
          widget: "boolean",
        },
        {
          label: "Innholdsfortegnelse?",
          name: "toc",
          widget: "boolean",
        },
        {
          label: "Språk",
          name: "lang",
          widget: "select",
          options: ["nb", "nn", "en"],
          default: "nb",
        },
      ],
    },
    {
      label: "Statiske sider",
      name: "statiske_sider",
      folder: "_posts/statisk",
      create: true,
      fields: [
        filename,
        {
          label: "Tittel",
          name: "title",
          widget: "string",
        },
        {
          label: "Hovedtekst",
          name: "body",
          widget: "markdown",
        },
        {
          label: "Språk",
          name: "lang",
          widget: "select",
          options: ["nb", "nn", "en"],
          default: "nb",
        },
      ],
    },
    atlas("en"),
    {
      label: "Tidligere engelske atlas",
      name: "tidligere_eng_atlas",
      folder: "_posts/en/tidligere_atlas",
      create: false,
      delete: false,
      media_folder: "/public/img/en/{{filename}}",
      public_folder: "/helseatlas/img/en/{{filename}}",
      identifier_field: "mainTitle",
      fields: [
        filename,
        {
          label: "Publiseringsdato",
          name: "date",
          widget: "datetime",
        },
        {
          label: "Publiseringsnummer",
          name: "num",
          widget: "number",
        },
        {
          label: "Tittel",
          name: "mainTitle",
          widget: "string",
        },
        {
          label: "Kort tittel",
          name: "shortTitle",
          widget: "string",
        },
        {
          label: "Forsidebilde",
          name: "image",
          widget: "file",
        },
        {
          label: "Forsidetekst",
          name: "frontpagetext",
          widget: "string",
        },
        {
          label: "Rapport",
          name: "pdfUrl",
          widget: "string",
        },
        {
          label: "Hovedtekst",
          name: "body",
          widget: "markdown",
        },
        {
          label: "Instant atlas?",
          name: "ia",
          widget: "boolean",
        },
        {
          label: "Innholdsfortegnelse?",
          name: "toc",
          widget: "boolean",
        },
        {
          label: "Språk",
          name: "lang",
          widget: "select",
          options: ["nb", "nn", "en"],
          default: "en",
        },
      ],
    },
    {
      label: "Statiske engelske sider",
      name: "statiske_sider_en",
      folder: "_posts/en/static",
      create: true,
      fields: [
        filename,
        {
          label: "Tittel",
          name: "title",
          widget: "string",
        },
        {
          label: "Hovedtekst",
          name: "body",
          widget: "markdown",
        },
        {
          label: "Språk",
          name: "lang",
          widget: "select",
          options: ["nb", "nn", "en"],
          default: "en",
        },
      ],
    },
  ],
};
