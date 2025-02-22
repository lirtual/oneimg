import type { ArticleModuleTemplate } from '@/types'

export const techTemplate: ArticleModuleTemplate = {
  common: {
    container: {},
    title: {},
    content: {},
  },
  hero: {
    container: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '12px',
      paddingTop: '13px',
      paddingRight: '12px',
      paddingBottom: '13px',
      textAlign: 'center',
      color: 'var(--hero-container-foreground)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'var(--hero-container-background)',
      backgroundImage: 'var(--hero-container-background-image)',
    },
    title: {
      position: 'relative',
      zIndex: 1,
      marginTop: '45px',
      marginBottom: '5px',
      fontWeight: 'bold',
      fontSize: '30px',
      textAlign: 'center',
      color: 'var(--hero-title-foreground)',
      backgroundColor: 'var(--hero-title-background)',
    },
    content: {
      position: 'relative',
      zIndex: 2,
      fontSize: '18px',
      color: 'var(--hero-content-foreground)',
      backgroundColor: 'var(--hero-content-background)',
    },

  },
  main: {
    container: {
      paddingLeft: '12px',
      paddingRight: '12px',
      paddingTop: '13px',
      paddingBottom: '13px',
      backgroundColor: 'var(--main-container-background)',
      color: 'var(--main-container-foreground)',
    },
    title: {
      'position': 'relative',
      'marginBottom': '13px',
      'padding': '10px 19px',
      'fontSize': '19px',
      'fontWeight': 'bold',
      'lineHeight': 1.2,
      'color': '#fff',
      'backgroundImage': 'linear-gradient(90deg, #3CA0FF 0%, #1D6DFF 100%)',
      'borderRadius': '10px',

      '& p': {
        minHeight: '22.8px',
      },

      '&::after': {
        content: '"NO." attr(data-index)',
        position: 'absolute',
        right: '19px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'inline-block',
        marginLeft: '5px',
        color: 'var(--main-title-foreground)',
        backgroundColor: 'var(--main-title-background)',
      },
      'p': {
        marginRight: '45px',
        lineHeight: 'inherit',
      },
    },
    content: {
      position: 'relative',
      padding: '12px 18px',
      borderRadius: '12px',
      fontSize: '15px',
      backgroundColor: 'rgb(255 255 255 / 0.7)',
      color: 'var(--main-content-foreground)',
    },
  },
  sub: {
    container: {},
    title: {
      display: 'flex',
      alignItems: 'center',
      width: 'fit-content',
      marginBottom: '10px',
      lineHeight: '1.2',
      borderRadius: '9999px 9999px 9999px 2px',
      fontWeight: 'bold',
      padding: '8px 20px',
      fontSize: '17px',
      color: 'var(--sub-title-foreground)',
      backgroundImage: 'var(--sub-title-background-image)',
      p: {
        lineHeight: 'inherit',
        margin: 0,
      },
    },
    content: {},
  },
}
