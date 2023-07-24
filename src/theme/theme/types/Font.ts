interface FontProperties {
  size: string;
  line: string;
  weight: 'normal' | 'bold'
  kerning?: string;
}


export interface Font {
  headingXl: FontProperties;
  headingL: FontProperties;
  headingM: FontProperties;
  headingS: FontProperties;
  bodyL: FontProperties;
  bodyM: FontProperties;
}

export const font: Font = {
  bodyL: {
    size: '1.3rem',
    line: '2.3rem',
    weight: 'normal'
  },
  bodyM: {
    size: '1.2rem',
    line: '1.5rem',
    weight: 'bold'
  },
  headingL: {
    size: '1.8rem',
    line: '2.3rem',
    weight: 'bold'
  },
  headingM: {
    size: '1.5rem',
    line: '1.9rem',
    weight: 'bold'
  },
  headingS: {
    size: '1.2rem',
    line: '1.5rem',
    weight: 'bold',
    kerning: '0.24rem'
  },
  headingXl: {
    size: '2.4rem',
    line: '3.0rem',
    weight: 'bold'
  }
}