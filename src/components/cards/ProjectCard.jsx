import React from "react";
import { Card, CardFooter, Image, CardHeader } from "@nextui-org/react";

const ICONS = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="51"
    height="45"
    viewBox="0 0 51 45"
    fill="none"
  >
    <g clip-path="url(#clip0_26_274)">
      <path
        d="M29.8655 22.3851C29.8655 18.9628 26.1598 16.8123 23.2113 18.5235C20.2628 20.2346 20.2628 24.5356 23.2113 26.2467C26.1598 27.9578 29.8655 25.8073 29.8655 22.3851ZM40.0227 14.1653C42.9584 0.133074 36.5 -4.27036 25.5208 5.88689C15.1874 -3.80066 7.82877 -0.747612 10.9601 14.1066C-3.47948 18.4597 -2.52278 26.654 11.0775 30.8397C7.96577 44.5196 13.7783 49.5102 25.5208 39.1768C36.911 49.3928 42.956 44.6096 39.8466 30.7809C54.6813 25.7512 53.3505 18.4709 40.0227 14.1653ZM38.0265 13.6369C35.6993 13.112 33.4475 12.7299 31.1572 12.5214C29.9505 10.757 28.545 8.9945 26.9299 7.3547C35.7324 -1.0887 40.9204 1.54954 38.0265 13.6369ZM15.3048 25.0858C16.1757 26.9451 17.3206 28.6477 18.1817 30.0764C16.7795 29.933 15.2689 29.7152 13.6609 29.4306C14.1761 27.9883 14.7247 26.5399 15.3048 25.0858ZM15.1874 20.0366C14.5468 18.4989 13.9623 17.0148 13.4847 15.6331C15.1448 15.2891 16.7715 14.9766 18.1817 14.8699C17.1321 16.5187 16.1352 18.2426 15.1874 20.0366ZM16.4204 22.6199C17.8561 19.7446 19.3748 17.0152 21.0586 14.5763C24.0463 14.4045 27.0023 14.4197 29.9242 14.635C31.563 16.9185 33.0925 19.6477 34.5625 22.6199C33.4625 24.8931 31.9005 27.5128 30.1003 30.3112C27.0948 30.5388 24.0129 30.5074 20.8825 30.3112C19.2959 27.8806 17.8059 25.3204 16.4204 22.6199ZM35.678 25.0858C36.2482 26.4693 36.775 27.8793 37.2633 29.3131C35.7563 29.6304 34.2698 29.8617 32.8011 30.0177C33.8064 28.4601 34.7601 26.8063 35.678 25.0858ZM32.8011 14.8699C34.402 15.089 35.9484 15.3627 37.4394 15.6919C36.9406 17.1741 36.3739 18.6227 35.7367 20.0366C34.828 18.2442 33.8522 16.5191 32.8011 14.8699ZM28.2803 12.2865C26.4517 12.2148 24.5915 12.2171 22.7026 12.2865C23.5295 11.199 24.4512 10.0629 25.4621 8.88122C26.4472 9.94459 27.3806 11.0892 28.2803 12.2865ZM24.053 7.3547C22.4378 8.9945 21.0323 10.6983 19.8257 12.4627C17.5354 12.6712 15.2248 13.0533 12.8976 13.5782C10.1381 1.30732 15.2504 -1.0887 24.053 7.3547ZM11.6059 28.9021C-0.62581 25.2228 -0.0386859 19.4886 11.4885 16.1028C12.1937 18.2426 13.0473 20.4157 14.0131 22.5025C13.0746 24.6606 12.2438 26.8772 11.6059 28.9021ZM13.1325 31.3681C15.207 31.8769 17.4054 32.1212 19.7083 32.3662C21.0939 34.3217 22.5288 36.1397 24.053 37.709C15.0895 46.3006 10.0927 43.1791 13.1325 31.3681ZM25.4621 36.2412C24.3999 35.1413 23.4082 33.895 22.4677 32.5423C24.5641 32.5865 26.5889 32.5914 28.5151 32.5423C27.5822 33.8658 26.5634 35.0975 25.4621 36.2412ZM26.9299 37.709C28.5653 35.9321 30.007 34.1308 31.2746 32.3075C33.4381 32.1483 35.63 31.8159 37.8504 31.3094C40.9176 43.881 35.3484 45.7374 26.9299 37.709ZM39.3182 28.7847C38.6893 26.7598 37.8951 24.6606 36.9697 22.5025C37.922 20.4157 38.7404 18.3013 39.4356 16.1616C50.6888 19.5669 51.5891 25.0076 39.3182 28.7847Z"
        fill="#7E8290"
      />
    </g>
    <defs>
      <clipPath id="clip0_26_274">
        <rect width="50" height="45" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="51"
    height="51"
    viewBox="0 0 51 51"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.09998 5.1001V45.9001H45.9V5.1001H5.09998ZM36.102 24.9171V24.9177C36.4932 24.9189 36.9378 24.939 37.2723 24.9753C38.6342 25.1226 39.6948 25.7102 40.5971 26.8169C41.0464 27.3682 41.2001 27.6094 41.1674 27.7126C41.1463 27.7792 40.838 28 39.8578 28.6507C38.8949 29.2899 38.5847 29.4814 38.5127 29.4814C38.4396 29.4814 38.2875 29.3248 38.0682 29.0241C37.6457 28.4452 37.2144 28.181 36.5477 28.0929C35.8306 27.9979 35.1875 28.2239 34.8725 28.6817C34.6032 29.0729 34.5626 29.7023 34.7766 30.1596C35.0245 30.6894 35.4733 30.9823 37.1932 31.7364C39.1768 32.6062 40.182 33.2015 40.9141 33.9403C41.7024 34.736 42.1019 35.6546 42.2246 36.954C42.2845 37.5874 42.2113 38.338 42.03 38.9483C41.5856 40.4444 40.3861 41.5399 38.628 42.0555C38.1421 42.198 37.6898 42.2831 37.2425 42.3159C36.5597 42.3662 35.5822 42.3385 34.9939 42.2528C33.5055 42.036 31.8253 41.1699 30.9875 40.1878C30.5763 39.7058 30.0512 38.9124 30.0512 38.7728C30.0512 38.7055 30.0846 38.6672 30.2168 38.5832C30.6089 38.334 32.8562 37.0494 32.8998 37.0494C32.9262 37.0494 33.0435 37.1877 33.1606 37.3568C33.4257 37.7396 34.0776 38.3975 34.409 38.617C34.6797 38.7963 35.0259 38.9402 35.4369 39.0441C35.6722 39.1028 35.7969 39.1133 36.3105 39.1133C36.8352 39.1131 36.9429 39.1043 37.1777 39.0412C37.7986 38.8741 38.2834 38.5283 38.4888 38.1058C38.5788 37.9233 38.5806 37.9005 38.5806 37.4578V36.9988L38.4702 36.7799C38.2029 36.2492 37.6268 35.8851 35.8057 35.0963C34.9692 34.7339 33.9446 34.223 33.5446 33.9688C32.6318 33.3887 31.9991 32.7255 31.5839 31.9137C31.1709 31.1064 31.1093 30.8059 31.1083 29.592C31.1073 28.6417 31.1057 28.6534 31.3025 28.0469C31.481 27.4965 31.8464 26.8817 32.2497 26.453C33.0549 25.5972 34.231 25.0472 35.4903 24.9378C35.6514 24.9225 35.8671 24.9166 36.1019 24.9173L36.102 24.9171ZM25.266 25.1048H25.2664C27.6917 25.106 29.082 25.1144 29.1043 25.1284C29.1463 25.1545 29.1515 25.3655 29.1515 26.7126V28.2667L26.7314 28.2755L24.3113 28.2843V35.1556C24.3113 38.9349 24.3037 42.0494 24.2932 42.0769C24.2761 42.1232 24.0899 42.1267 22.5153 42.1267H20.7565L20.7383 42.0556C20.7266 42.0166 20.718 38.902 20.7178 35.1343L20.7172 28.2839L18.2971 28.2753L15.877 28.2665V26.7308C15.877 25.5128 15.8854 25.1866 15.9178 25.1542C15.9511 25.1199 17.1862 25.1111 22.508 25.1058C23.5341 25.1048 24.4575 25.1043 25.266 25.1048Z"
      fill="#7E8290"
    />
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="51"
    height="51"
    viewBox="0 0 51 51"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M33.5786 33.3891C35.1245 33.2291 36.2973 31.8965 36.244 30.2973C36.1906 28.6981 34.858 27.4188 33.2588 27.4188H33.1522C31.4997 27.4721 30.2204 28.858 30.2737 30.5105C30.327 31.3101 30.6468 32.0031 31.1266 32.4829C29.3141 36.0544 26.5422 38.6664 22.3843 40.8519C19.5591 42.3445 16.6273 42.8776 13.6954 42.5044C11.2966 42.1846 9.43091 41.1185 8.25817 39.3594C6.55237 36.7474 6.39245 33.9221 7.83172 31.0969C8.84454 29.0712 10.4437 27.5787 11.4565 26.8324C11.2433 26.1394 10.9235 24.9667 10.7636 24.1138C3.03416 29.7109 3.83375 37.2804 6.17923 40.8519C7.93834 43.5172 11.5099 45.1697 15.4545 45.1697C16.5206 45.1697 17.5868 45.0631 18.6529 44.7966C25.4761 43.4639 30.6468 39.4127 33.5786 33.3891Z"
      fill="#7E8290"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.9605 26.7792C38.9092 22.0349 32.9389 19.4229 26.1157 19.4229H25.2628C24.7831 18.4634 23.7702 17.8237 22.6508 17.8237H22.5442C20.8917 17.877 19.6124 19.263 19.6657 20.9155C19.719 22.5147 21.0516 23.794 22.6508 23.794H22.7574C23.9302 23.7407 24.943 22.9944 25.3694 21.9816H26.329C30.3802 21.9816 34.2183 23.1544 37.6832 25.4465C40.3485 27.2056 42.2675 29.4978 43.3336 32.2697C44.2399 34.5086 44.1865 36.6941 43.227 38.5599C41.7345 41.3851 39.2291 42.931 35.9241 42.931C33.7918 42.931 31.7662 42.2913 30.7001 41.8115C30.1137 42.3446 29.0476 43.1975 28.3013 43.7306C30.5935 44.7967 32.9389 45.3831 35.1778 45.3831C40.2952 45.3831 44.0799 42.5578 45.5192 39.7326C47.0651 36.6408 46.9585 31.3102 42.9605 26.7792Z"
      fill="#7E8290"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.8809 34.2955C15.9342 35.8946 17.2669 37.174 18.8661 37.174H18.9727C20.6252 37.1207 21.9045 35.7347 21.8512 34.0822C21.7979 32.483 20.4653 31.2037 18.8661 31.2037H18.7595C18.6528 31.2037 18.4929 31.2037 18.3863 31.257C16.2008 27.6322 15.2945 23.6875 15.6144 19.423C15.8276 16.2246 16.8937 13.4527 18.7595 11.1605C20.3053 9.18822 23.2905 8.22871 25.3161 8.1754C30.9666 8.06879 33.3654 15.1052 33.5253 17.9304C34.2183 18.0904 35.391 18.4635 36.1906 18.73C35.5509 10.0944 30.2203 5.6167 25.1029 5.6167C20.3053 5.6167 15.8809 9.0816 14.1218 14.199C11.6697 21.0222 13.2689 27.5789 16.2541 32.7496C15.9875 33.1227 15.8276 33.7091 15.8809 34.2955Z"
      fill="#7E8290"
    />
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="51"
    height="51"
    viewBox="0 0 51 51"
    fill="none"
  >
    <g clip-path="url(#clip0_26_322)">
      <path
        d="M48.7314 6.19095L35.1854 8.65995L37.5392 0.5L18.7412 4.1834L18.4484 9.12876L1.97902 6.18495C0.844647 6.11897 0.183742 6.93347 0.652181 8.06446L24.4858 49.8597C24.9987 50.697 26.1798 50.7297 26.6977 49.8597L50.0679 8.06043C50.5953 7.1155 49.7872 6.00787 48.7314 6.19095ZM25.5869 48.7139L2.24499 7.78081L18.3577 10.6609L17.5981 23.4895L24.2027 21.9652L22.3611 30.9832L27.3781 29.459L24.8884 41.5094C24.7643 42.2975 25.7908 42.7167 26.2985 41.5888L40.9685 12.3122L33.7287 13.7095L34.7136 10.2952L48.4745 7.78705L25.5869 48.7139Z"
        fill="#7E8290"
      />
    </g>
    <defs>
      <clipPath id="clip0_26_322">
        <rect
          width="50"
          height="50"
          fill="white"
          transform="translate(0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>,
];
const ProjectCard = () => {
  return (
    <Card isBlurred shadow="lg" radius="lg" className="p-2 project-card">
      <CardHeader className="absolute z-10 top-1 flex-col !items-center">
        <h4 className="project-card-title">Dotify Online</h4>
      </CardHeader>
      <Image
        className="object-cover w-full z-0"
        src="https://picsum.photos/500/300"
        removeWrapper
      />
      <CardFooter>
        <div className="flex justify-start items-center">
          {ICONS.map((icon) => (
            <div className="mr-2 icon">{icon}</div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
