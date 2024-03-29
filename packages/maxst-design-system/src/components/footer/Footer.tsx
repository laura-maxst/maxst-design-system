/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container } from '@components/container';
import { Button } from '@components/button';
import { SnsList } from '@components/snsList';
import { Text } from '@components/text';

interface FooterProps {
  termData?: { label: string; url: string }[];
  topRightArea?: React.ReactNode;
  bottomRightArea?: React.ReactNode;
  className?: string;
}

const Footer = ({
  termData,
  topRightArea,
  bottomRightArea,
  className,
}: FooterProps) => {
  return (
    <footer
      className={['mds-footer footer-wrap', className ? className : ''].join(
        ' ',
      )}
    >
      <Container>
        <div className="footer-top">
          <div className="footer-top__left">
            <SnsList data={snsData} />
          </div>
          {topRightArea && (
            <div className="footer-top__right">{topRightArea} </div>
          )}
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__left">
            <div>
              <img src="/images/lib/footer_logo.png" alt="maxst logo" />
              {termData && (
                <div className="footer__term-list">
                  {termData.map((item, index) => {
                    return (
                      <Button type="text" size="m" key={item.label + index}>
                        {item.label}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
            <address className="footer__address">
              <Text type="body" size="s" role="subtlest" className="copyright">
                대표 : 박재완
              </Text>
              <Text type="body" size="s" role="subtlest" className="copyright">
                사업자등록번호 : 114-86-83769
              </Text>
              <Text type="body" size="s" role="subtlest" className="copyright">
                주소 : 서울시 강남구 남부순환로 351길 4,STAY77
              </Text>
              <Text type="body" size="s" role="subtlest" className="copyright">
                마케팅 문의 : 02-5121-9801
              </Text>
              <Text type="body" size="s" role="subtlest" className="copyright">
                전화번호 : 070-8854-1140
              </Text>
              <Text type="body" size="s" role="subtlest" className="copyright">
                이메일 : help@maxst.com
              </Text>
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

const snsData: {
  type: 'facebook' | 'instagram' | 'youtube' | 'blog' | 'medium';
  url: string;
}[] = [
  {
    type: 'facebook',
    url: 'https://www.facebook.com/ARmaxst',
  },
  {
    type: 'instagram',
    url: 'https://www.instagram.com/armaxst/',
  },
  {
    type: 'youtube',
    url: 'https://www.youtube.com/user/ARmaxst',
  },
  {
    type: 'blog',
    url: 'https://blog.naver.com/armaxst',
  },
  {
    type: 'medium',
    url: 'https://medium.com/@maxst_tech',
  },
];

export { Footer };
