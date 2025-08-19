const {heroui} = require("@heroui/theme/plugin");
const {commonColors} = require("@heroui/theme/colors");

// get tailwindcss default config
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "code-foreground": "rgb(var(--code-foreground) / <alpha-value>)",
        "code-syntax1": "rgb(var(--code-syntax1) / <alpha-value>)",
        "code-syntax2": "rgb(var(--code-syntax2) / <alpha-value>)",
        "code-syntax3": "rgb(var(--code-syntax3) / <alpha-value>)",
        "code-syntax4": "rgb(var(--code-syntax4) / <alpha-value>)",
        "code-syntax5": "rgb(var(--code-syntax5) / <alpha-value>)",
        "code-syntax6": "rgb(var(--code-syntax6) / <alpha-value>)",
        "code-removed": "rgb(var(--code-removed) / <alpha-value>)",
        "code-string": "rgb(var(--code-string) / <alpha-value>)",
        "code-class": "rgb(var(--code-class) / <alpha-value>)",
        "code-punctuation": "rgb(var(--code-punctuation) / <alpha-value>)",
        "code-number": "rgb(var(--code-number) / <alpha-value>)",
        "code-added": "rgb(var(--code-added) / <alpha-value>)",
        "code-line-number": "rgb(var(--code-line-number) / <alpha-value>)",
        "code-faded-line": "rgb(var(--code-faded-line) / <alpha-value>)",
        "code-comment": "rgb(var(--code-comment) / <alpha-value>)",
        "code-keyword": "rgb(var(--code-keyword) / <alpha-value>)",
        "code-function": "rgb(var(--code-function) / <alpha-value>)",
        "code-tag": "rgb(var(--code-tag) / <alpha-value>)",
        "code-attr-name": "rgb(var(--code-attr-name) / <alpha-value>)",
        "code-language-javascript": "rgb(var(--code-language-javascript) / <alpha-value>)",
        "code-highlighted-word1-bg": "rgb(var(--code-highlighted-word1-bg) / <alpha-value>)",
        "code-highlighted-word1-bg-active":
          "rgb(var(--code-highlighted-word1-bg-active) / <alpha-value>)",
        "code-highlighted-word1-text": "rgb(var(--code-highlighted-word1-text) / <alpha-value>)",
        "code-highlighted-word2-bg": "rgb(var(--code-highlighted-word2-bg) / <alpha-value>)",
        "code-highlighted-word2-bg-active":
          "rgb(var(--code-highlighted-word2-bg-active) / <alpha-value>)",
        "code-highlighted-word2-text": "rgb(var(--code-highlighted-word2-text) / <alpha-value>)",
        "code-highlighted-word3-bg": "rgb(var(--code-highlighted-word3-bg) / <alpha-value>)",
        "code-highlighted-word3-bg-active":
          "rgb(var(--code-highlighted-word3-bg-active) / <alpha-value>)",
        "code-highlighted-word3-text": "rgb(var(--code-highlighted-word3-text) / <alpha-value>)",
      },
      boxShadow: {
        highlighted: `${commonColors.purple[500]} 1px 0 0, ${commonColors.purple[500]} -1px 0 0`,
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
        serif: defaultTheme.fontFamily.serif,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        'toast-gap': 'var(--toast-gap)',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: "hsl(var(--heroui-foreground))",
            maxWidth: "none",
            hr: {
              marginTop: "2em",
              marginBottom: "2em",
            },
            "h1, h2, h3": {
              letterSpacing: "-0.025em",
            },
            h2: {
              marginTop: "1.5em",
              marginBottom: `${16 / 24}em`,
            },
            h3: {
              marginTop: "1.8em",
              lineHeight: "1.4",
            },
            h4: {
              marginTop: "2em",
              fontSize: "1.125em",
            },
            "h2 a": {
              fontSize: 'var(--text-2xl) !important',
              fontWeight: 'var(--font-semibold)',
              lineHeight: 'var(--text-2xl--line-height);',
            },
            "h3 a": {
              fontSize: "1.25rem !important",
              fontWeight: 'var(--font-bold)',
            },
            "h2 small, h3 small, h4 small": {
              fontFamily: 'var(--font-mono); ',
              color: 'var(--color-slate-500); ',
              fontWeight: 500,
            },
            "h2 small": {
              fontSize: 'var(--text-lg);',
              lineHeight: 'var(--text-lg--line-height);',
            },
            "h3 small": {
              fontSize: 'var(--text-base); ',
              lineHeight: 'var(--text-base--line-height);',
            },
            "h4 small": {
              fontSize: 'var(--text-sm); ',
              lineHeight: 'var(--text-sm--line-height);',
            },
            "h4 a": {
              fontWeight: 'var(--font-bold);',
            },
            "h2, h3, h4": {
              "scroll-margin-top": "var(--scroll-mt)",
            },
            ul: {
              listStyleType: "none",
              paddingLeft: 0,
            },
            "ul > li": {
              marginTop: "0.1em",
              marginBottom: "0.1em",
              fontWeight: 'var(--font-normal);',
            },
            "ul > li > *:last-child": {
              marginTop: 0,
              marginBottom: 0,
            },
            "ul > li > a": {
              marginTop: "0",
              marginBottom: "0",
            },
            a: {
              fontWeight: 'var(--font-normal);',
            },
            "a code": {
              color: "inherit",
              fontWeight: "inherit",
            },
            strong: {
              color: "hsl(var(--heroui-foreground))",
              fontWeight: 'var(--font-bold);',
            },
            "a strong": {
              color: "inherit",
              fontWeight: "inherit",
            },
            kbd: {
              fontSize: "0.875em",
              fontVariantLigatures: "none",
              borderRadius: "4px",
              margin: "0 1px",
            },
            code: {
              fontWeight: 'var(--font-medium);',
              fontVariantLigatures: "none",
            },
            pre: {
              display: "flex",
              fontSize: 'var(--text-sm);',
              backgroundColor: 'transparent',
              fontWeight: 'var(--font-medium);',
              padding: 0,
              margin: 0,
            },
            p: {
              marginTop: `${12 / 14}em`,
              marginBottom: `${12 / 14}em`,
              fontWeight: 'var(--font-normal);',
            },
            "pre code": {
              flex: "none",
              minWidth: "100%",
            },
            table: {
              marginTop: "0px",
              fontSize: 'var(--text-sm);',
              lineHeight: 'var(--text-sm--line-height);',
            },
            thead: {
              border: "none",
            },
            "thead th": {
              paddingTop: 0,
              fontWeight: 'var(--font-semibold);',
            },
            "tbody tr": {
              border: "none",
            },
            "tbody tr:last-child": {
              border: "none",
            },
            "figure figcaption": {
              textAlign: "center",
              fontStyle: "italic",
            },
            "figure > figcaption": {
              marginTop: `${12 / 14}em`,
            },
            blockquote: {
              fontWeight: 'var(--font-normal);',
              fontStyle: "font-normal",
            },
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
          },
        },
        dark: {
          css: {
            color: "hsl(var(--heroui-default-700))",
            strong: {
              color: "hsl(var(--heroui-cyan-500))",
            },
          },
        },
        neutral: {
          css: {
            "--tw-prose-body": "hsl(var(--heroui-default-700))",
            "--tw-prose-headings": "hsl(var(--heroui-foreground))",
            "--tw-prose-lead": "hsl(var(--heroui-default-600))",
            "--tw-prose-links": "hsl(var(--heroui-default-900))",
            "--tw-prose-bold": "hsl(var(--heroui-default-900))",
            "--tw-prose-counters": "hsl(var(--heroui-default-500))",
            "--tw-prose-bullets": "hsl(var(--heroui-default-300))",
            "--tw-prose-hr": "hsl(var(--heroui-default-200))",
            "--tw-prose-quotes": "hsl(var(--heroui-default-900))",
            "--tw-prose-quote-borders": "hsl(var(--heroui-default-200))",
            "--tw-prose-captions": "hsl(var(--heroui-default-500))",
            "--tw-prose-code": "hsl(var(--heroui-default-900))",
            "--tw-prose-pre-code": "hsl(var(--heroui-default-200))",
            "--tw-prose-pre-bg": "hsl(var(--heroui-default-800))",
            "--tw-prose-th-borders": "hsl(var(--heroui-default-300))",
            "--tw-prose-td-borders": "hsl(var(--heroui-default-200))",
            "--tw-prose-invert-body": "hsl(var(--heroui-default-300))",
            "--tw-prose-invert-headings": commonColors.white,
            "--tw-prose-invert-lead": 'var(--color-neutral-400);',
            "--tw-prose-invert-links": commonColors.white,
            "--tw-prose-invert-bold": commonColors.white,
            "--tw-prose-invert-counters": 'var(--color-neutral-400);',
            "--tw-prose-invert-bullets": 'var(--color-neutral-600);',
            "--tw-prose-invert-hr": 'var(--color-neutral-700);',
            "--tw-prose-invert-quotes": 'var(--color-neutral-100);',
            "--tw-prose-invert-quote-borders": 'var(--color-neutral-700);',
            "--tw-prose-invert-captions": 'var(--color-neutral-400);',
            "--tw-prose-invert-code": commonColors.white,
            "--tw-prose-invert-pre-code": "hsl(var(--heroui-default-300))",
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": 'var(--color-neutral-600);',
            "--tw-prose-invert-td-borders": 'var(--color-neutral-700);',
          },
        },
      }),
      keyframes: {
        heartbeat: {
          "0%": {transform: "scale(1)"},
          "50%": {transform: "scale(1.2)"},
          "100%": {transform: "scale(1)"},
        },
        levitate: {
          "0%": {
            transform: "translateY(0)",
          },
          "30%": {
            transform: "translateY(-10px)",
          },
          "50%": {
            transform: "translateY(4px)",
          },
          "70%": {
            transform: "translateY(-15px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        expand: {
          "0%": {transform: "scale(1)"},
          "50%": {transform: "scale(1.2)"},
          "100%": {transform: "scale(1)"},
        },
        "expand-opacity": {
          "0%": {
            opacity: 0,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1.3)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(1.295)",
          },
        },
        "text-gradient": {
          to: {
            backgroundPosition: "-200% center",
          },
        },
        "scrolling-banner": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(calc(-50% - var(--gap)/2))"},
        },
        "scrolling-banner-vertical": {
          from: {transform: "translateY(0)"},
          to: {transform: "translateY(calc(-50% - var(--gap)/2))"},
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        heartbeat: "heartbeat 1s ease-in-out infinite",
        levitate: "levitate 5s ease infinite",
        expand: "expand 6s ease-out infinite both",
        "expand-opacity": "expand-opacity 6s linear infinite both",
        "text-gradient": "text-gradient 4s linear 0s infinite normal forwards running",
        "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
        "scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
      },
      maxWidth: {
        "8xl": "90rem", // 1440px
      },
      utilities: {
        '.scrollbar-hide': {
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }
      },
    }
  },
  plugins: [
    heroui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            "code-background": "#262b36",
            strong: "#ff4ecd",
            "code-mdx": "#ff4ecd",
          },
        },
        dark: {
          colors: {
            strong: "#06B7DB",
            "code-background": "#111113",
            "code-mdx": "#06B7DB",
          },
        },
        // only for testing purpose
        olive: {
          extend: "dark",
          layout: {
            radius: {
              small: "2px",
              medium: "4px",
              large: "6px",
            },
            borderWidth: {
              small: "1px",
              medium: "1px",
              large: "2px",
            },
          },
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
