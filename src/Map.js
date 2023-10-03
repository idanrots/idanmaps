// import { ReactBingmaps } from 'react-bingmaps';
// import ErrorBoundary from './Error';
// import { useSelector } from 'react-redux';

// function Map() {
//  // const { newestPoint, points } = useSelector(state => state.reducer);

//   // Assuming a single point as the marker for demonstration
//   const markerPoint = {
//     latitude: 47.6062,  // Latitude of the point to pinpoint
//     longitude: -122.3321,  // Longitude of the point to pinpoint
//   };
//   const markerPoint2 = {
//     latitude: 46.6062,  // Latitude of the point to pinpoint
//     longitude: -125.3321,  // Longitude of the point to pinpoint
//   };
//   const markerPoint3 = {
//     latitude: 50.6062,  // Latitude of the point to pinpoint
//     longitude: -118.3321,  // Longitude of the point to pinpoint
//   };
//   const markerPoint4 = {
//     latitude: 48.6062,  // Latitude of the point to pinpoint
//     longitude: -124.3321,  // Longitude of the point to pinpoint
//   };
// //   const markerPoint5 = {
// //     latitude: 51.6062,  // Latitude of the point to pinpoint
// //     longitude: -125.3321,  // Longitude of the point to pinpoint
// //   };

//   const pointsToView = [markerPoint , markerPoint2 , markerPoint3 , markerPoint4 ];

//   pointsToView.sort((a, b) => a.longitude - b.longitude);
//   pointsToView.push(pointsToView[0]);

//   const pushPins = pointsToView.map((point, index) => ({
//     location: [point.latitude, point.longitude],
//     option: { color: 'red' },
//     key: index,  // Unique key for each pushpin
//   }));

//   const polygonLocations = pushPins.map(pushPin => pushPin.location);

//   return (
   
//     <ReactBingmaps
//       bingmapKey="Am8yCDMAGgZXkXa8bMowEpkISzTfjD8EjSTHv2pizV5SkD4s4aJsiaSzpLYB3c4v"
//       center={[markerPoint.latitude, markerPoint.longitude]}  // Center the map on the marker
//       pushPins={pushPins}
//       polyline={{
//         location: polygonLocations, // Connect back to the first point to close the polygon
//         option: { strokeColor: 'blue', strokeThickness: 3 },
//       }}
//       zoom={10}  // Zoom level for the map
//     />
//   );
// }

// export default Map;










// import React, { useEffect } from 'react';
// import { ReactBingmaps } from 'react-bingmaps';
// import ErrorBoundary from './Error';
// import { useSelector } from 'react-redux';

// function Map() {
//     const { newestPoint, points } = useSelector(state => state.reducer);

//             const markerPoint = {
//             latitude: 47.6062,  // Latitude of the point to pinpoint
//             longitude: -122.3321,  // Longitude of the point to pinpoint
//           };
//           const markerPoint2 = {
//             latitude: 46.6062,  // Latitude of the point to pinpoint
//             longitude: -125.3321,  // Longitude of the point to pinpoint
//           };
//           const markerPoint3 = {
//             latitude: 50.6062,  // Latitude of the point to pinpoint
//             longitude: -118.3321,  // Longitude of the point to pinpoint
//           };
//           const markerPoint4 = {
//             latitude: 48.6062,  // Latitude of the point to pinpoint
//             longitude: -124.3321,  // Longitude of the point to pinpoint
//           };

//           const pointsToView = [markerPoint , markerPoint2 , markerPoint3 , markerPoint4 ];

//     useEffect(() => {
//         const addCustomLayer = () => {
//           const map = new window.Microsoft.Maps.Map('#myMap', {
//             credentials: 'Am8yCDMAGgZXkXa8bMowEpkISzTfjD8EjSTHv2pizV5SkD4s4aJsiaSzpLYB3c4v',
//             center: new window.Microsoft.Maps.Location(47.6062, -122.3321), // Seattle, WA
//             zoom: 10,
//           });
    
//           // Create a custom layer
//           const customLayer = new window.Microsoft.Maps.Layer();
    
//           // Define some custom data
    
//           // Create a pushpin for each data point and add it to the layer
//           pointsToView.forEach(location => {
//             const pushpin = new window.Microsoft.Maps.Pushpin(location);
//             customLayer.add(pushpin);
//           });
          
//           // Add the custom layer to the map
//           map.layers.insert(customLayer);
//           const polygon = new window.Microsoft.Maps.Polygon(pointsToView, {
//             fillColor: 'rgba(0, 0, 255, 0.3)',
//             strokeColor: 'blue',
//             strokeThickness: 3
//           });
//           map.entities.push(polygon);
//         };
    
//         if (window.Microsoft && window.Microsoft.Maps) {
//           // Bing Maps API is available
//           addCustomLayer();
//         } else {
//           // Bing Maps API is not loaded, so load it asynchronously
//           const script = document.createElement('script');
//           script.type = 'text/javascript';
//           script.src = 'https://www.bing.com/api/maps/mapcontrol?callback=loadBingMap';
//           document.body.appendChild(script);
    
//           // Callback function to load the map
//           window.loadBingMap = () => {
//             addCustomLayer();
//           };
//         }
    
//       }, []);
    
//       return <div id="myMap" style={{ width: '100%', height: '500px' }} />;
// };
// export default Map;





import React, { useEffect } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import ErrorBoundary from './Error';
import { useSelector } from 'react-redux';

function Map() {
    const { points } = useSelector(state => state.reducer);
    

    useEffect(() => {
        const addCustomLayer = () => {
          const map = new window.Microsoft.Maps.Map('#myMap', {
            credentials: 'Am8yCDMAGgZXkXa8bMowEpkISzTfjD8EjSTHv2pizV5SkD4s4aJsiaSzpLYB3c4v',
            zoom: 2,

          });
    
    
          const customLayer = new window.Microsoft.Maps.Layer();

        //   console.log(points === 'undefined');
        //   console.log(!points);


          if(points.length > 0) 
          {
    
              points.forEach(location => {
                const pushpin = new window.Microsoft.Maps.Pushpin(location);
                customLayer.add(pushpin);
              });
            
              map.layers.insert(customLayer);
              const polygon = new window.Microsoft.Maps.Polygon(points, {
                fillColor: 'rgba(0, 0, 255, 0.3)',
                strokeColor: 'blue',
                strokeThickness: 3
              });
              map.entities.push(polygon);
            }
          
        };
    
        if (window.Microsoft && window.Microsoft.Maps) {
          addCustomLayer();
        } else {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = 'https://www.bing.com/api/maps/mapcontrol?callback=loadBingMap';
          document.body.appendChild(script);
    
          // Callback function to load the map
          window.loadBingMap = () => {
            addCustomLayer();
          };
        }
    
      }, [points]);
    
      return <div id="myMap" style={{ width: '100%', height: '500px'}} />;
};
export default Map;

