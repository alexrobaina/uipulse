# Tailwind CSS Measurements Reference

## 📏 Spacing Scale (Base Unit: 0.25rem = 4px)

| Class | rem      | px    | Usage                 |
| ----- | -------- | ----- | --------------------- |
| `0`   | 0        | 0px   | Reset spacing         |
| `px`  | -        | 1px   | Hairline borders      |
| `0.5` | 0.125rem | 2px   | Very tight spacing    |
| `1`   | 0.25rem  | 4px   | Minimal spacing       |
| `1.5` | 0.375rem | 6px   | Small spacing         |
| `2`   | 0.5rem   | 8px   | Base spacing          |
| `2.5` | 0.625rem | 10px  | -                     |
| `3`   | 0.75rem  | 12px  | Small margin/padding  |
| `3.5` | 0.875rem | 14px  | -                     |
| `4`   | 1rem     | 16px  | Standard spacing      |
| `5`   | 1.25rem  | 20px  | Medium spacing        |
| `6`   | 1.5rem   | 24px  | Large spacing         |
| `7`   | 1.75rem  | 28px  | -                     |
| `8`   | 2rem     | 32px  | Section spacing       |
| `9`   | 2.25rem  | 36px  | -                     |
| `10`  | 2.5rem   | 40px  | -                     |
| `11`  | 2.75rem  | 44px  | -                     |
| `12`  | 3rem     | 48px  | Large section spacing |
| `14`  | 3.5rem   | 56px  | -                     |
| `16`  | 4rem     | 64px  | Component spacing     |
| `20`  | 5rem     | 80px  | -                     |
| `24`  | 6rem     | 96px  | Page section spacing  |
| `28`  | 7rem     | 112px | -                     |
| `32`  | 8rem     | 128px | -                     |
| `36`  | 9rem     | 144px | -                     |
| `40`  | 10rem    | 160px | -                     |
| `44`  | 11rem    | 176px | -                     |
| `48`  | 12rem    | 192px | -                     |
| `52`  | 13rem    | 208px | -                     |
| `56`  | 14rem    | 224px | -                     |
| `60`  | 15rem    | 240px | -                     |
| `64`  | 16rem    | 256px | Large layout spacing  |
| `72`  | 18rem    | 288px | -                     |
| `80`  | 20rem    | 320px | -                     |
| `96`  | 24rem    | 384px | Maximum spacing       |

## 🎯 Padding Classes

### All Sides

```css
p-{size}    /* padding: {size} */
```

### Directional

```css
pt-{size}   /* padding-top */
pr-{size}   /* padding-right */
pb-{size}   /* padding-bottom */
pl-{size}   /* padding-left */
px-{size}   /* padding-left + padding-right */
py-{size}   /* padding-top + padding-bottom */
```

### Examples

```css
p-4         /* padding: 1rem (16px) */
px-6        /* padding-left: 1.5rem; padding-right: 1.5rem */
py-2        /* padding-top: 0.5rem; padding-bottom: 0.5rem */
pt-8        /* padding-top: 2rem */
```

## 📐 Margin Classes

### All Sides

```css
m-{size}    /* margin: {size} */
m-auto      /* margin: auto */
```

### Directional

```css
mt-{size}   /* margin-top */
mr-{size}   /* margin-right */
mb-{size}   /* margin-bottom */
ml-{size}   /* margin-left */
mx-{size}   /* margin-left + margin-right */
my-{size}   /* margin-top + margin-bottom */
mx-auto     /* margin-left: auto; margin-right: auto */
```

### Negative Margins

```css
-m-{size}   /* negative margin all sides */
-mt-{size}  /* negative margin-top */
-mr-{size}  /* negative margin-right */
-mb-{size}  /* negative margin-bottom */
-ml-{size}  /* negative margin-left */
-mx-{size}  /* negative horizontal margins */
-my-{size}  /* negative vertical margins */
```

## 📊 Width Classes

### Fixed Widths

```css
w-{size}    /* width: {size} */
w-auto      /* width: auto */
w-full      /* width: 100% */
w-screen    /* width: 100vw */
w-min       /* width: min-content */
w-max       /* width: max-content */
w-fit       /* width: fit-content */
```

### Fractional Widths

```css
/* Halves */
w-1/2       /* width: 50% */

/* Thirds */
w-1/3       /* width: 33.333333% */
w-2/3       /* width: 66.666667% */

/* Quarters */
w-1/4       /* width: 25% */
w-2/4       /* width: 50% */
w-3/4       /* width: 75% */

/* Fifths */
w-1/5       /* width: 20% */
w-2/5       /* width: 40% */
w-3/5       /* width: 60% */
w-4/5       /* width: 80% */

/* Sixths */
w-1/6       /* width: 16.666667% */
w-2/6       /* width: 33.333333% */
w-3/6       /* width: 50% */
w-4/6       /* width: 66.666667% */
w-5/6       /* width: 83.333333% */

/* Twelfths */
w-1/12      /* width: 8.333333% */
w-2/12      /* width: 16.666667% */
w-3/12      /* width: 25% */
w-4/12      /* width: 33.333333% */
w-5/12      /* width: 41.666667% */
w-6/12      /* width: 50% */
w-7/12      /* width: 58.333333% */
w-8/12      /* width: 66.666667% */
w-9/12      /* width: 75% */
w-10/12     /* width: 83.333333% */
w-11/12     /* width: 91.666667% */
```

## 📏 Height Classes

### Fixed Heights

```css
h-{size}    /* height: {size} */
h-auto      /* height: auto */
h-full      /* height: 100% */
h-screen    /* height: 100vh */
h-min       /* height: min-content */
h-max       /* height: max-content */
h-fit       /* height: fit-content */
```

### Fractional Heights

```css
h-1/2       /* height: 50% */
h-1/3       /* height: 33.333333% */
h-2/3       /* height: 66.666667% */
h-1/4       /* height: 25% */
h-2/4       /* height: 50% */
h-3/4       /* height: 75% */
h-1/5       /* height: 20% */
h-2/5       /* height: 40% */
h-3/5       /* height: 60% */
h-4/5       /* height: 80% */
h-1/6       /* height: 16.666667% */
h-5/6       /* height: 83.333333% */
```

## 🔒 Min/Max Dimensions

### Min Width

```css
min-w-0     /* min-width: 0px */
min-w-full  /* min-width: 100% */
min-w-min   /* min-width: min-content */
min-w-max   /* min-width: max-content */
min-w-fit   /* min-width: fit-content */
```

### Max Width

```css
max-w-0     /* max-width: 0rem */
max-w-none  /* max-width: none */
max-w-xs    /* max-width: 20rem (320px) */
max-w-sm    /* max-width: 24rem (384px) */
max-w-md    /* max-width: 28rem (448px) */
max-w-lg    /* max-width: 32rem (512px) */
max-w-xl    /* max-width: 36rem (576px) */
max-w-2xl   /* max-width: 42rem (672px) */
max-w-3xl   /* max-width: 48rem (768px) */
max-w-4xl   /* max-width: 56rem (896px) */
max-w-5xl   /* max-width: 64rem (1024px) */
max-w-6xl   /* max-width: 72rem (1152px) */
max-w-7xl   /* max-width: 80rem (1280px) */
max-w-full  /* max-width: 100% */
max-w-min   /* max-width: min-content */
max-w-max   /* max-width: max-content */
max-w-fit   /* max-width: fit-content */
max-w-prose /* max-width: 65ch */
max-w-screen-sm  /* max-width: 640px */
max-w-screen-md  /* max-width: 768px */
max-w-screen-lg  /* max-width: 1024px */
max-w-screen-xl  /* max-width: 1280px */
max-w-screen-2xl /* max-width: 1536px */
```

### Min/Max Height

```css
min-h-0     /* min-height: 0px */
min-h-full  /* min-height: 100% */
min-h-screen /* min-height: 100vh */
min-h-min   /* min-height: min-content */
min-h-max   /* min-height: max-content */
min-h-fit   /* min-height: fit-content */

max-h-{size} /* max-height: {size} */
max-h-none  /* max-height: none */
max-h-full  /* max-height: 100% */
max-h-screen /* max-height: 100vh */
max-h-min   /* max-height: min-content */
max-h-max   /* max-height: max-content */
max-h-fit   /* max-height: fit-content */
```

## 🎯 Position Values

### Position Properties

```css
top-{size}    /* top: {size} */
right-{size}  /* right: {size} */
bottom-{size} /* bottom: {size} */
left-{size}   /* left: {size} */
inset-{size}  /* top, right, bottom, left: {size} */
inset-x-{size} /* left, right: {size} */
inset-y-{size} /* top, bottom: {size} */
```

### Special Position Values

```css
top-auto, right-auto, bottom-auto, left-auto
top-full, right-full, bottom-full, left-full
top-1/2, right-1/2, bottom-1/2, left-1/2
/* And other fractional values */

/* Negative positioning */
-top-{size}, -right-{size}, -bottom-{size}, -left-{size}
```

## 🔢 Z-Index

```css
z-0         /* z-index: 0 */
z-10        /* z-index: 10 */
z-20        /* z-index: 20 */
z-30        /* z-index: 30 */
z-40        /* z-index: 40 */
z-50        /* z-index: 50 */
z-auto      /* z-index: auto */
-z-10       /* z-index: -10 (and other negative values) */
```

## 📐 Border & Radius

### Border Width

```css
border-0    /* border-width: 0px */
border      /* border-width: 1px */
border-2    /* border-width: 2px */
border-4    /* border-width: 4px */
border-8    /* border-width: 8px */

/* Directional borders */
border-t-{size}, border-r-{size}, border-b-{size}, border-l-{size}
border-x-{size}, border-y-{size}
```

### Border Radius

```css
rounded-none    /* border-radius: 0px */
rounded-sm      /* border-radius: 0.125rem (2px) */
rounded         /* border-radius: 0.25rem (4px) */
rounded-md      /* border-radius: 0.375rem (6px) */
rounded-lg      /* border-radius: 0.5rem (8px) */
rounded-xl      /* border-radius: 0.75rem (12px) */
rounded-2xl     /* border-radius: 1rem (16px) */
rounded-3xl     /* border-radius: 1.5rem (24px) */
rounded-full    /* border-radius: 9999px */

/* Directional radius */
rounded-t-{size}, rounded-r-{size}, rounded-b-{size}, rounded-l-{size}
rounded-tl-{size}, rounded-tr-{size}, rounded-br-{size}, rounded-bl-{size}
```

## 🔄 Gap (Flexbox/Grid)

```css
gap-{size}    /* gap: {size} */
gap-x-{size}  /* column-gap: {size} */
gap-y-{size}  /* row-gap: {size} */
```

## 🎨 Visual Effects

### Ring (Focus/Outline)

```css
ring-0      /* box-shadow: 0 0 0 0px */
ring-1      /* box-shadow: 0 0 0 1px */
ring-2      /* box-shadow: 0 0 0 2px */
ring-4      /* box-shadow: 0 0 0 4px */
ring-8      /* box-shadow: 0 0 0 8px */
ring        /* box-shadow: 0 0 0 3px */
ring-inset  /* inset ring */
```

### Box Shadow

```css
shadow-sm    /* small shadow */
shadow       /* default shadow */
shadow-md    /* medium shadow */
shadow-lg    /* large shadow */
shadow-xl    /* extra large shadow */
shadow-2xl   /* 2x extra large shadow */
shadow-inner /* inset shadow */
shadow-none  /* no shadow */
```

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm:    /* @media (min-width: 640px) */
md:    /* @media (min-width: 768px) */
lg:    /* @media (min-width: 1024px) */
xl:    /* @media (min-width: 1280px) */
2xl:   /* @media (min-width: 1536px) */
```

### Responsive Examples

```css
/* Width that scales with breakpoints */
w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5

/* Padding that increases with screen size */
p-2 sm:p-4 md:p-6 lg:p-8

/* Margin that changes direction */
mt-4 md:mt-0 md:ml-4
```

## 🔧 Arbitrary Values

### Custom Values

```css
w-[350px]        /* width: 350px */
h-[calc(100vh-4rem)] /* height: calc(100vh - 4rem) */
mt-[17px]        /* margin-top: 17px */
text-[#1da1f2]   /* color: #1da1f2 */
bg-[url('/image.png')] /* background-image: url('/image.png') */
```

## 💡 Common Patterns

### Centering

```css
/* Center horizontally */
mx-auto

/* Center both ways (flexbox parent) */
flex items-center justify-center

/* Absolute center */
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
```

### Full Coverage

```css
/* Full width and height */
w-full h-full

/* Full viewport */
w-screen h-screen

/* Absolute full coverage */
absolute inset-0
```

### Spacing Patterns

```css
/* Card-like spacing */
p-6 m-4 rounded-lg

/* Form spacing */
space-y-4   /* space between form fields */
mb-2        /* space below labels */

/* Button spacing */
px-4 py-2   /* standard button padding */
px-6 py-3   /* larger button padding */
```

---

## 🎯 Quick Reference for Your Sidebar

Based on your current sidebar code, here are the measurements you're using:

```css
/* Toggle button positioning */
top-4 left-64    /* 1rem from top, 16rem from left */
left-14          /* 3.5rem from left when floating */
w-10 h-10        /* 2.5rem x 2.5rem square button */

/* Sidebar width */
w-16             /* 4rem when collapsed */
w-64             /* 16rem when expanded */

/* Padding adjustments */
p-2              /* 0.5rem padding when collapsed */
p-4              /* 1rem padding when expanded */

/* Z-index layering */
z-50             /* High z-index for toggle */
z-40             /* Lower z-index for overlay */
```
