<template>
  <svg
    viewBox="0 0 200 150"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
  >
    <g transform="translate(110 50)">
      <clipPath id="blob-path">
        <path
          d="M39.8,-48.2C51.2,-46.5,59.7,-34.3,59,-22.5C58.2,-10.7,48.1,0.8,44.7,15.5C41.2,30.1,44.4,47.8,38.1,62C31.7,76.2,15.9,86.9,0.7,86C-14.5,85,-28.9,72.4,-43,60.7C-57,49,-70.7,38.2,-78.5,23.3C-86.3,8.5,-88.2,-10.4,-79.5,-22.3C-70.7,-34.1,-51.3,-38.9,-36.2,-39.5C-21.2,-40.1,-10.6,-36.5,1.8,-38.9C14.2,-41.4,28.4,-50,39.8,-48.2Z"
        />
      </clipPath>
      <image
        width="300"
        x="-100"
        y="-50"
        xlink:href="/education.jpeg"
        clip-path="url(#blob-path)"
      />
    </g>
  </svg>
</template>
