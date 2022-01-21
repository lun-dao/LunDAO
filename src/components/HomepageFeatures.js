import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '文章投稿',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        有想要投稿的文章嗎？你可以在 LunDAO 投稿文章，社群將會協助審閱文稿，並且透過社群代幣 LUN 作為獎勵，一同豐富 Ethereum 的中文資源！
        <div className={styles.callForAction}>
          <Link
              className="button button--secondary button--lg"
              to="/publish-guideline">
              投稿文章
          </Link>
        </div>
      </>
    ),
  },
  {
    title: '閱覽文章',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        閱讀已在 LunDAO 投稿的文章，看看社群成員發表了什麼文章。
        <div className={styles.callForAction}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            閱讀文章
          </Link>
        </div>
      </>
    ),
  },
  {
    title: '文章提案',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        你感興趣的文章卻沒有任何中文資訊嗎？你可以在 LunDAO 進行文章提案，透過 LUN 代幣提供懸賞，吸引作者研究該主題並且撰寫相關文章。
        <div className={styles.callForAction}>
          <Link
            className="button button--secondary button--lg"
            to="/request-for-article">
            文章提案
          </Link>
        </div>
      </>
    ),
  },
  {
    title: '社群貢獻',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        你也想為了更多的 Ethereum 中文資源一起努力嗎？除了撰寫文章外 LunDAO 也需要社群一起營運，你也可以參考我們的貢獻指南，一起協助社群成長。
        <div className={styles.callForAction}>
          <Link
              className="button button--secondary button--lg"
              to="https://github.com/lun-dao/LunDAO/blob/main/CONTRIBUTING.md">
              貢獻指南
          </Link>
        </div>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
