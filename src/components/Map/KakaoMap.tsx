'use client';
import React, { useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import ZoomControler from '../RightBar/ZoomControler/ZoomControler';
import InfoWindow from './InfoWindow';

const KakaoMap = () => {
  const [level, setLevel] = useState(3);
  const lat = 37.49999581324621;
  const lng = 126.86281102222206;

  return (
    <>
      <Map center={{ lat: lat, lng: lng }} className="w-full h-screen -z-0 overflow-y-hidden" level={level}>
        <ZoomControler level={level} setLevel={setLevel} />
        <MapMarker
          position={{ lat: lat, lng: lng }}
          image={{
            src: 'https://ifh.cc/g/AZm1Zy.png', // 마커이미지의 주소입니다
            size: {
              width: 30,
              height: 50
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 17,
                y: -2
              } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            }
          }}
        />
        <CustomOverlayMap position={{ lat: lat, lng: lng }} yAnchor={1}>
          <div className="overlay">
            <InfoWindow />
          </div>
        </CustomOverlayMap>
      </Map>
    </>
  );
};

export default KakaoMap;
