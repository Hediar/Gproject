export const getSmartCity = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/smartcity`
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      console.error("API 요청에 실패했습니다.");
      return null;
    }
  } catch (error) {
    console.error("API 요청 중 오류 발생: ", error);
    throw error;
  }
};

export const getLocation = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/location`
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      console.error("API 요청에 실패했습니다.");
      return null;
    }
  } catch (error) {
    console.error("API 요청 중 오류 발생: ", error);
    throw error;
  }
};

export const getOperation = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/operation`
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      console.error("API 요청에 실패했습니다.");
      return null;
    }
  } catch (error) {
    console.error("API 요청 중 오류 발생: ", error);
    throw error;
  }
};
