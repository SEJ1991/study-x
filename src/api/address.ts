import axios from "axios";

/**
 * 대한민국의 모든 특별/광역시,도를 반환하는 api
 */
export const getSido = async () => {
  return await axios.get(
    "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000"
  );
};

/**
 * 특정 시도의 모든 구를 반환하는 api
 * @param {number} sidoNo 시도 번호
 */
export const getSigungu = async (sidoNo: number) => {
  return await axios.get(
    `https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${sidoNo}*00000`
  );
};
