/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container } from '@components/container';
import { Button } from '@components/button';
import type { SnsListDataType } from '@components/snsList';
import { SnsList } from '@components/snsList';
import { Text } from '@components/text';

interface FooterPropsType {
  snsData?: SnsListDataType[];
  termData?: { label: string; onClick: () => void }[];
  topRightArea?: React.ReactNode;
  bottomRightArea?: React.ReactNode;
  className?: string;
  logo: any;
  addressData?: string[];
}

const Footer = ({
  snsData,
  termData,
  topRightArea,
  bottomRightArea,
  className,
  logo,
  addressData,
}: FooterPropsType) => {
  return (
    <footer
      className={['mds-footer footer-wrap', className ? className : ''].join(
        ' ',
      )}
    >
      <Container>
        <div className="footer-top">
          <div className="footer-top__left">
            {snsData && <SnsList data={snsData} />}
          </div>
          {topRightArea && (
            <div className="footer-top__right">{topRightArea} </div>
          )}
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__left">
            <div>
              <div className="logo">{logo}</div>
              {termData && (
                <div className="footer__term-list">
                  {termData.map((item, index) => {
                    return (
                      <Button
                        type="text"
                        size="m"
                        key={item.label + index}
                        onClick={item.onClick}
                      >
                        {item.label}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
            <address className="footer__address">
              {addressData ? (
                addressData.map((item) => {
                  return (
                    <Text type="body" size="s" role="subtlest" key={item}>
                      {item}
                    </Text>
                  );
                })
              ) : (
                <>
                  <Text type="body" size="s" role="subtlest">
                    대표 : 박재완
                  </Text>
                  <Text type="body" size="s" role="subtlest">
                    사업자등록번호 : 114-86-83769
                  </Text>
                  <Text type="body" size="s" role="subtlest">
                    주소 : 서울시 강남구 남부순환로 351길 4,STAY77
                  </Text>
                  <Text type="body" size="s" role="subtlest">
                    마케팅 문의 : 02-5121-9801
                  </Text>
                  <Text type="body" size="s" role="subtlest">
                    전화번호 : 070-8854-1140
                  </Text>
                  <Text type="body" size="s" role="subtlest">
                    이메일 : help@maxst.com
                  </Text>
                </>
              )}
            </address>
            <Text type="body" size="s" className="footer__copyright">
              © 2023 MAXST Co., Ltd. All Rights Reserved.
            </Text>
          </div>
          {bottomRightArea && (
            <div className="footer-bottom__right">{bottomRightArea}</div>
          )}
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
