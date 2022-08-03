import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    body: `Clash Display, -apple-system, BlinkMacSystemFont`,
    heading: `Clash Display, -apple-system, BlinkMacSystemFont`,
    fontDisplay: "optional",
    webkitFontSmoothing: "antialiased",
  },

  styles: {
    global: {
      body: {
        color: "#2F3542",
        fontWeight: 500,
        webkitFontSmoothing: "antialiased",
      },
      button: {
        fontWeight: 500,
        _focus: {
          boxShadow: "none !important",
        },
      },
    },
  },

  components: {
    Text: {
      baseStyle: {
        color: "#2F3542",
      },
    },

    FormLabel: {
      variants: {
        outlined: {
          fontSize: "sm",
          position: "absolute",
          top: -2.5,
          left: 4,
          zIndex: 2,
          px: 1,
          bgColor: "white",
          color: "rgb(0 0 0 / 72%)",
        },
      },

      defaultProps: {
        variant: "outlined",
      },
    },

    Input: {
      sizes: {
        lg: {
          field: {
            fontWeight: 700,
            fontSize: "2xl",
            py: 6,
          },
        },
      },

      variants: {
        outline: {
          field: {
            pt: 1,
            rounded: "lg",
            border: "1px solid",
            borderColor: "rgb(0 0 0 / 60%)",

            _hover: {
              borderColor: "rgb(0 0 0 / 80%)",
            },

            _focus: {
              borderColor: "rgb(0 0 0 / 80%)",
              outline: "none",
              boxShadow: "none",
            },
          },
        },
      },
    },

    Select: {
      variants: {
        outline: {
          field: {
            pt: 1,
            rounded: "lg",
            border: "1px solid",
            borderColor: "rgb(0 0 0 / 60%)",

            _hover: {
              borderColor: "rgb(0 0 0 / 80%)",
            },

            _focus: {
              borderColor: "rgb(0 0 0 / 80%)",
              outline: "none",
              boxShadow: "none",
            },
          },
        },
      },
    },

    Textarea: {
      variants: {
        outline: {
          pt: 2,
          rounded: "lg",
          border: "1px solid",
          borderColor: "rgb(0 0 0 / 60%)",

          _hover: {
            borderColor: "rgb(0 0 0 / 80%)",
          },

          _focus: {
            borderColor: "rgb(0 0 0 / 80%)",
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },

    SelectMenu: {
      baseStyle: {
        w: "100%",
        cursor: "pointer",
      },

      sizes: {
        md: {
          fontWeight: 600,
          fontSize: "md",
        },

        lg: {
          fontWeight: 700,
          fontSize: "2xl",
        },
      },

      variants: {
        outline: {
          rounded: "0px",
          border: "1px solid",
          borderColor: "rgb(0 0 0 / 12%)",
          color: "black",
          py: 2,
          px: 4,

          _hover: {
            borderColor: "rgb(0 0 0 / 60%)",
          },
        },
      },
    },

    // Link: {
    //   baseStyle: {
    //     // borderBottom: '1px solid',
    //     _hover: {
    //       // textDecoration: "none",
    //       // transform: 'scale(1.01)'
    //     },
    //     _focus: {
    //       boxShadow: "none",
    //     },
    //   },
    // },

    // Button: {
    //   baseStyle: {
    //     _focus: {
    //       boxShadow: 'none !important'
    //     }
    //   },
    //   sizes: {
    //     lg: {
    //       h: 16
    //     }
    //   },

    //   variants: {
    //     primary: {
    //       backgroundColor: '#586EE7',
    //       color: '#FFFFFF',
    //       rounded: '8px',
    //       _hover: {
    //         transform: 'scale(1.02)',
    //         _disabled: {
    //           backgroundColor: 'rgb(0 0 0 / 90%)'
    //         }
    //       }
    //     },

    //     secondary: {
    //       backgroundColor: 'rgba(88, 110, 231, 0.08)',
    //       color: '#586EE7',
    //       rounded: '8px',
    //       _hover: {
    //         backgroundColor: 'rgb(88 110, 231 / 0.08)',
    //         transform: 'scale(1.02)',
    //         _disabled: {
    //           backgroundColor: 'rgb(0 0 0 / 90%)'
    //         }
    //       }
    //     },

    //     'primary-outline': {
    //       border: '1px solid rgb(0 0 0)',
    //       backgroundColor: 'transparent',
    //       rounded: '0px',
    //       _focus: {
    //         border: '1px solid #FFEA3C'
    //       }
    //     },

    //     solid: {
    //       backgroundColor: '#0F0F0F',
    //       // border: '1px solid #004BFF',
    //       rounded: '8px',
    //       color: '#FEF8EC',
    //       px: 12,
    //       py: 8,
    //       _hover: {
    //         backgroundColor: '#0F0F0F',
    //         transform: 'scale(1.02)'
    //         // _disabled: {
    //         //   backgroundColor: 'rgb(0 0 0 / 95%)'
    //         // }
    //       },
    //       _focus: {
    //         border: 'none'
    //       }
    //     },

    //     'solid-outline': {
    //       border: '1px solid rgb(0 0 0)',
    //       backgroundColor: 'transparent',
    //       rounded: '0px',
    //       _hover: {
    //         backgroundColor: '#004BFF',
    //         border: '1px solid #004BFF',
    //         color: '#FEF8EC',

    //         transform: 'scale(1.02)'
    //         // _disabled: {
    //         //   backgroundColor: 'rgb(0 0 0 / 95%)'
    //         // }
    //       },
    //       _focus: {
    //         border: '1px solid #FFEA3C'
    //       }
    //     },

    //     'solid-disabled': {
    //       background: 'black',
    //       color: '#fff',
    //       opacity: '0.24',
    //       rounded: '0px'
    //     }
    //   }
    // },

    // Tabs: {
    //   variants: {
    //     line: {
    //       tablist: {
    //         borderBottom: "1px solid",
    //         borderColor: "rgba(0, 0, 0, 0.24)",
    //       },

    //       tab: {
    //         color: "rgb(0 0 0 / 48%)",
    //         borderBottom: "1px solid",
    //         borderColor: "transparent",

    //         _selected: {
    //           color: "rgb(0 0 0 / 72%)",
    //           fontWeight: "600",
    //         },
    //         _active: {
    //           bg: "transparent",
    //         },
    //         _focus: {
    //           boxShadow: "none",
    //         },
    //       },
    //     },
    //   },
    // },

    // Textarea: {
    //   variants: {
    //     outline: {
    //       rounded: "0px",
    //       border: "1px solid",
    //       borderColor: "rgb(0 0 0 / 26%)",
    //       color: "black",

    //       _hover: {
    //         borderColor: "rgb(0 0 0 / 60%)",
    //       },

    //       _placeholder: {
    //         color: "rgb(0 0 0 / 36%)",
    //       },

    //       _focus: {
    //         borderColor: "rgb(0 0 0 / 60%)",
    //         outline: "none",
    //         boxShadow: "none",
    //       },
    //     },
    //   },
    // },

    // Checkbox: {
    //   baseStyle: {
    //     control: {
    //       _checked: {
    //         bg: "#212121",
    //         borderColor: "#212121",

    //         _hover: {
    //           bg: "#212121",
    //           borderColor: "#212121",
    //         },
    //       },
    //     },
    //     label: {
    //       fontWeight: "500",
    //       ml: 4,
    //     },
    //   },

    //   md: {
    //     label: { fontSize: "sm" },
    //   },

    //   lg: {
    //     label: { fontSize: "md" },
    //   },
    // },

    // Radio: {
    //   baseStyle: {
    //     control: {
    //       _checked: {
    //         bg: "#000000",
    //         borderColor: "#000000",

    //         _hover: {
    //           bg: "#000000",
    //           borderColor: "#000000",
    //         },
    //       },
    //     },
    //     label: {
    //       fontWeight: "500",
    //       ml: 4,
    //     },
    //   },

    //   md: {
    //     label: { fontSize: "sm" },
    //   },

    //   lg: {
    //     label: { fontSize: "md" },
    //   },
    // },
  },
});
