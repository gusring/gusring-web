import { FormItem } from '../../../shared/types';

/**
 * 41종 행정 서식 데이터베이스 (5개 국어 행정 정보 포함)
 */
export const formsList: FormItem[] = [
  {
    id: 1,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_1_de4467.png', 'en': '/forms/en/forms_en_1_55d95e.png', 'zh': '/forms/cn/forms_cn_1_b48911.png', 'ja': '/forms/jp/forms_jp_1_504277.png', 'vi': '/forms/vi/forms_vi_1_cb467c.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_1_e2446a.png'], 'en': ['/guides/en/guides_en_1_e19274.png', '/guides/en/guides_en_1_d86611.png', '/guides/en/guides_en_1_15b7bd.png'], 'zh': ['/guides/cn/guides_cn_1_761135.png', '/guides/jp/guides_jp_1_75d000.png', '/guides/jp/guides_jp_1_642320.png'], 'ja': ['/guides/jp/guides_jp_1_dccdc3.png', '/guides/cn/guides_cn_1_d9fc18.png', '/guides/cn/guides_cn_1_2b6339.png'], 'vi': ['/guides/vi/guides_vi_1_ad4cca.png', '/guides/vi/guides_vi_1_21707e.png', '/guides/vi/guides_vi_1_6e0ab1.png']},
    title: { ko: '가족관계등록 창설신고서', en: 'Family Register Creation Report', zh: '家族关系登记创立申报书', ja: '家族関係登録創設届', vi: 'Đơn báo cáo lập đăng ký quan hệ gia đình' },
    desc: { ko: '가족관계등록부가 없는 사람이 새로 등록을 만들 때 사용합니다.', en: 'Used to create a new family register.', zh: '没有家族关系登记簿的人重新登记时使用。', ja: '家族関係登録簿がない人が新しく登録を作る時に使用します。', vi: 'Sử dụng cho người chưa có sổ đăng ký quan hệ gia đình để lập mới.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '신분증, 판결문 정본 및 확정증명서', 
      en: 'ID Card, Certified copy of judgment & finality certificate', 
      zh: '身份证, 判决书正本及确定证明书', 
      ja: '身分証明書, 判決書正本及び確定証明書', 
      vi: 'Thẻ căn cước, Bản sao phán quyết & giấy xác nhận' 
    },
    notes: { 
      ko: '가족관계등록부가 없는 경우에만 해당됩니다.', 
      en: 'Only applicable if no family register exists.', 
      zh: '仅适用于没有家族关系登记簿的情况。', 
      ja: '家族関係登録簿がない場合のみ該当します。', 
      vi: 'Chỉ áp dụng nếu chưa có sổ đăng ký quan hệ gia đình.' 
    },
  },
  {
    id: 2,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_2_2b90e7.png', 'en': '/forms/en/forms_en_2_1102b8.png', 'zh': '/forms/cn/forms_cn_2_817252.png', 'ja': '/forms/jp/forms_jp_2_fc58d9.png', 'vi': '/forms/vi/forms_vi_2_984f9c.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_2_6c9a7e.png', '/guides/ko/guides_ko_2_118135.png'], 'en': ['/guides/en/guides_en_2_80a2e3.png', '/guides/en/guides_en_2_684f7a.png', '/guides/en/guides_en_2_99086e.png', '/guides/en/guides_en_2_7057be.png', '/guides/en/guides_en_2_e89b84.png', '/guides/en/guides_en_2_997a07.png', '/guides/en/guides_en_2_4cfc11.png', '/guides/en/guides_en_2_5637a9.png'], 'zh': ['/guides/cn/guides_cn_2_b6de1a.png', '/guides/jp/guides_jp_2_c1a6d6.png', '/guides/jp/guides_jp_2_1d12cd.png', '/guides/jp/guides_jp_2_2df6da.png', '/guides/jp/guides_jp_2_9d7550.png', '/guides/jp/guides_jp_2_5db19d.png', '/guides/jp/guides_jp_2_bae1bc.png', '/guides/jp/guides_jp_2_be0642.png'], 'ja': ['/guides/jp/guides_jp_2_082765.png'], 'vi': ['/guides/vi/guides_vi_2_7737e3.png', '/guides/vi/guides_vi_2_cade5b.png', '/guides/vi/guides_vi_2_0f0962.png', '/guides/vi/guides_vi_2_6e2b35.png', '/guides/vi/guides_vi_2_02fda1.png', '/guides/vi/guides_vi_2_58220a.png', '/guides/vi/guides_vi_2_70c49d.png']},
    title: { ko: '사망신고서', en: 'Death Report', zh: '死亡申报书', ja: '死亡届', vi: 'Giấy báo tử' },
    desc: { ko: '가족이나 친족이 사망했을 때 관할 기관에 알리는 서류입니다.', en: "A document to notify authorities of a family member's death.", zh: '家属或亲属死亡时向管辖机构报告的文件。', ja: '家族や親族が死亡した時に管轄機関に知らせる書類です。', vi: 'Văn bản thông báo khi có thành viên trong gia đình qua đời.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '사망진단서(또는 사체검안서), 신고인 신분증', 
      en: 'Death certificate, Reporter\'s ID Card', 
      zh: '死亡诊断书, 申报人身份证', 
      ja: '死亡診断書, 届出人の身分証明書', 
      vi: 'Giấy báo tử, Thẻ căn cước người báo cáo' 
    },
    notes: { 
      ko: '사망 사실을 안 날로부터 1개월 이내에 신고해야 합니다.', 
      en: 'Must report within 1 month of learning of the death.', 
      zh: '须在获悉死亡之日起1个月内申报。', 
      ja: '死亡の事実を知った日から1ヶ月以内に届け出る必要があります。', 
      vi: 'Phải báo cáo trong vòng 1 tháng kể từ khi biết tin.' 
    },
  },
  {
    id: 3,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_3_36ceb4.png', 'vi': '/forms/vi/forms_vi_3_224018.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_3_d81817.png', '/guides/ko/guides_ko_3_c72aa4.png'], 'vi': ['/guides/vi/guides_vi_3_d3655f.png', '/guides/vi/guides_vi_3_9ed6de.png', '/guides/vi/guides_vi_3_99371d.png', '/guides/vi/guides_vi_3_c7a7c2.png', '/guides/vi/guides_vi_3_e89991.png', '/guides/vi/guides_vi_3_859b43.png']},
    title: { ko: '인지(친권자 지정)신고서', en: 'Acknowledgment Report', zh: '认知申报书', ja: '認知届', vi: 'Đơn báo cáo nhận con' },
    desc: { ko: '혼인 외의 자녀를 자신의 자식으로 인정할 때 제출합니다.', en: "Submitted to acknowledge a child born out of wedlock as one's own.", zh: '承认婚姻以外的子女为自己的子女时提交。', ja: '婚姻外の子を自分の子として認める時に提出します.', vi: 'Nộp để công nhận con ngoài giá thú là con của mình.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '인지자 및 피인지자 신분증, 가족관계증명서', 
      en: 'ID Cards of parent & child, Family Relation Certificate', 
      zh: '认知者及被认知者身份证, 家族关系证明书', 
      ja: '認知者及び被認知者の身分証明書, 家族関係証明書', 
      vi: 'Thẻ căn cước, Giấy chứng nhận quan hệ gia đình' 
    },
  },
  {
    id: 4,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_4_868895.png', 'en': '/forms/en/forms_en_4_e9c4ac.png', 'zh': '/forms/cn/forms_cn_4_376ea6.png', 'ja': '/forms/jp/forms_jp_4_c32ef6.png', 'vi': '/forms/vi/forms_vi_4_5a0f69.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_4_488fc0.png', '/guides/ko/guides_ko_4_231b42.png'], 'en': ['/guides/en/guides_en_4_2c1662.png', '/guides/en/guides_en_4_8d8f78.png', '/guides/en/guides_en_4_b13bf8.png', '/guides/en/guides_en_4_3242f0.png', '/guides/en/guides_en_4_953d1f.png', '/guides/en/guides_en_4_fae02e.png', '/guides/en/guides_en_4_3f216b.png', '/guides/en/guides_en_4_3afcf6.png'], 'zh': ['/guides/cn/guides_cn_4_ff0956.png', '/guides/jp/guides_jp_4_511674.png', '/guides/jp/guides_jp_4_beaf73.png', '/guides/jp/guides_jp_4_d9c711.png', '/guides/jp/guides_jp_4_ce1aed.png', '/guides/jp/guides_jp_4_3c61fd.png', '/guides/jp/guides_jp_4_007c91.png'], 'ja': ['/guides/jp/guides_jp_4_bccbd6.png'], 'vi': ['/guides/vi/guides_vi_4_a0b616.png', '/guides/vi/guides_vi_4_bc909c.png', '/guides/vi/guides_vi_4_8d8345.png', '/guides/vi/guides_vi_4_5df41c.png', '/guides/vi/guides_vi_4_a1032d.png', '/guides/vi/guides_vi_4_c87414.png', '/guides/vi/guides_vi_4_7d3387.png']},
    title: { ko: '출생신고서', en: 'Birth Report', zh: '出生申报书', ja: '出生届', vi: 'Giấy khai sinh' },
    desc: { ko: '자녀가 태어난 후 법적 등록을 위해 작성하는 신고서입니다.', en: 'A report to legally register a child after birth.', zh: '孩子出生后为了法律登记而填写的申报书。', ja: '子供が生まれた後、法的登録のために作成する届出書です.', vi: 'Đơn đăng ký hợp pháp cho trẻ sau khi sinh.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '출생증명서, 신고인 신분증, 부모 신분증', 
      en: 'Birth certificate, Reporter\'s ID, Parents\' IDs', 
      zh: '出生证明书, 申报人身份证, 父母身份证', 
      ja: '出生証明書, 届出人の身分証明書, 父母の身分証明書', 
      vi: 'Giấy khai sinh, Thẻ căn cước người báo cáo & cha mẹ' 
    },
    notes: { 
      ko: '출생 후 1개월 이내에 관할 읍·면·동 사무소에 신고해야 합니다.', 
      en: 'Must report within 1 month of birth.', 
      zh: '须在出生后1个月内申报。', 
      ja: '出生後1ヶ月以内に届け出る必要があります。', 
      vi: 'Phải báo cáo trong vòng 1 tháng sau khi sinh.' 
    },
  },
  {
    id: 5,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_5_3b0a7e.png', 'en': '/forms/en/forms_en_5_2d7e1f.png', 'zh': '/forms/cn/forms_cn_5_0a77a8.png', 'ja': '/forms/jp/forms_jp_5_f2d7d0.png', 'vi': '/forms/vi/forms_vi_5_102570.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_5_c8e39c.png', '/guides/ko/guides_ko_5_1cf2a6.png'], 'en': ['/guides/en/guides_en_5_9b7dec.png', '/guides/en/guides_en_5_5cabf7.png', '/guides/en/guides_en_5_a83ebc.png', '/guides/en/guides_en_5_357bcb.png', '/guides/en/guides_en_5_3fb535.png', '/guides/en/guides_en_5_53164e.png', '/guides/en/guides_en_5_8b3f9b.png', '/guides/en/guides_en_5_27cade.png'], 'zh': ['/guides/cn/guides_cn_5_e60634.png', '/guides/jp/guides_jp_5_c7e25e.png', '/guides/jp/guides_jp_5_633eab.png', '/guides/jp/guides_jp_5_955614.png', '/guides/jp/guides_jp_5_0e4bc2.png', '/guides/jp/guides_jp_5_55d05d.png'], 'ja': ['/guides/jp/guides_jp_5_8cb07d.png'], 'vi': ['/guides/vi/guides_vi_5_bf216d.png', '/guides/vi/guides_vi_5_c6c2ef.png', '/guides/vi/guides_vi_5_1ffd83.png', '/guides/vi/guides_vi_5_ae7796.png', '/guides/vi/guides_vi_5_d62ca3.png', '/guides/vi/guides_vi_5_e52062.png']},
    title: { ko: '파양신고서', en: 'Dissolution of Adoption', zh: '罢养申报书', ja: '離縁届', vi: 'Đơn báo cáo chấm dứt nhận nuôi' },
    desc: { ko: '입양된 자녀와 양부모 사이의 법적 관계를 해소할 때 사용합니다.', en: 'Used to terminate the legal relationship of adoption.', zh: '解除领养子女与养父母之间的法律关系时使用。', ja: '養子と養親の間の法的関係を解消する時に使用します.', vi: 'Dùng để chấm dứt quan hệ pháp lý giữa con nuôi và cha mẹ nuôi.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '협의서 또는 재판서 정본, 신분증', 
      en: 'Agreement or certified copy of judgment, ID Card', 
      zh: '协议书或裁判书正本, 身份证', 
      ja: '協議書または裁判書正本, 身分証明書', 
      vi: 'Bản thỏa thuận hoặc phán quyết, Thẻ căn cước' 
    },
  },
  {
    id: 6,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_6_ab1bbd.png', 'en': '/forms/en/forms_en_6_e371a8.png', 'zh': '/forms/cn/forms_cn_6_5f036d.png', 'ja': '/forms/jp/forms_jp_6_e284bf.png', 'vi': '/forms/vi/forms_vi_6_d1199e.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_6_12d5d2.png'], 'en': ['/guides/en/guides_en_6_3cf9b2.png', '/guides/en/guides_en_6_7deb55.png', '/guides/en/guides_en_6_e214ab.png'], 'zh': ['/guides/cn/guides_cn_6_a6580d.png', '/guides/cn/guides_cn_6_58d2f5.png', '/guides/cn/guides_cn_6_6453b1.png'], 'vi': ['/guides/vi/guides_vi_6_98d975.png', '/guides/vi/guides_vi_6_ae4de6.png']},
    title: { ko: '개명신고서', en: 'Name Change Report', zh: '改名申报书', ja: '改名届', vi: 'Đơn báo cáo đổi tên' },
    desc: { ko: '법원의 허가를 받아 이름을 공식적으로 바꿀 때 제출합니다.', en: "Submitted to officially change one's name with court approval.", zh: '获得法院许可正式改名时提交。', ja: '裁判所の許可を得て名前を公式に変える時に提出します.', vi: 'Nộp để chính thức đổi tên sau khi được tòa án cho phép.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '법원 허가 결정문 정본, 신고인 신분증', 
      en: 'Certified copy of court approval, Reporter\'s ID', 
      zh: '法院许可决定书正本, 申报人身份证', 
      ja: '裁判所の許可決定文正本, 届出人の身分証明書', 
      vi: 'Bản sao quyết định của tòa án, Thẻ căn cước' 
    },
    notes: { 
      ko: '개명 허가 결정 등본을 받은 날로부터 1개월 이내에 신고해야 합니다.', 
      en: 'Must report within 1 month of receiving the court decision.', 
      zh: '须在收到法院许可决定副本之日起1个月内申报。', 
      ja: '改名許可決定謄本を受け取った日から1ヶ月以内に届け出る必要があります。', 
      vi: 'Phải báo cáo trong vòng 1 tháng sau khi nhận quyết định.' 
    },
  },
  {
    id: 7,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_7_243632.png', 'ja': '/forms/jp/forms_jp_7_9de9a7.png', 'vi': '/forms/vi/forms_vi_7_42ceaf.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_7_fb1287.png'], 'vi': ['/guides/vi/guides_vi_7_48c859.png', '/guides/vi/guides_vi_7_985572.png']},
    title: { ko: '성본 변경 신고서', en: 'Surname Change Report', zh: '姓本变更申报书', ja: '姓本変更届', vi: 'Đơn báo cáo thay đổi họ' },
    desc: { ko: '자녀의 성과 본을 변경하기 위해 작성하는 서류입니다.', en: "Document to change a child's surname and origin.", zh: '为了变更子女的姓和本而填写的材料。', ja: '子の氏と本を変更するために作成する書類です.', vi: 'Văn bản dùng để thay đổi họ và nguồn gốc của con.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '법원 허가 결정문 정본, 신분증', 
      en: 'Certified copy of court approval, ID Card', 
      zh: '法院许可决定书正本, 身份证', 
      ja: '裁判所の許可決定文正本, 身分証明書', 
      vi: 'Bản sao quyết định của tòa án, Thẻ căn cước' 
    },
  },
  {
    id: 8,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_8_760805.png', 'en': '/forms/en/forms_en_8_6e09a6.png', 'zh': '/forms/cn/forms_cn_8_9facd5.png', 'ja': '/forms/jp/forms_jp_8_a72b4d.png', 'vi': '/forms/vi/forms_vi_8_869b1c.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_8_7c5fc4.png', '/guides/ko/guides_ko_8_488410.png'], 'en': ['/guides/en/guides_en_8_8374c0.png', '/guides/en/guides_en_8_d95548.png', '/guides/en/guides_en_8_fe37d0.png', '/guides/en/guides_en_8_c86196.png', '/guides/en/guides_en_8_e84b5c.png', '/guides/en/guides_en_8_62a01d.png', '/guides/en/guides_en_8_14a4b3.png', '/guides/en/guides_en_8_1b01b0.png', '/guides/en/guides_en_8_955dda.png'], 'zh': ['/guides/cn/guides_cn_8_7df35b.png', '/guides/jp/guides_jp_8_9200ac.png', '/guides/jp/guides_jp_8_663c3f.png', '/guides/jp/guides_jp_8_d50717.png', '/guides/jp/guides_jp_8_39ac2b.png', '/guides/jp/guides_jp_8_977579.png'], 'ja': ['/guides/jp/guides_jp_8_bd766b.png'], 'vi': ['/guides/vi/guides_vi_8_3ffb2b.png', '/guides/vi/guides_vi_8_4def50.png', '/guides/vi/guides_vi_8_6b8561.png', '/guides/vi/guides_vi_8_d854cc.png', '/guides/vi/guides_vi_8_d6f502.png', '/guides/vi/guides_vi_8_95f81a.png']},
    title: { ko: '입양신고서', en: 'Adoption Report', zh: '收养申报书', ja: '養子縁組届', vi: 'Giấy đăng ký nhận con nuôi' },
    desc: { ko: '법적으로 자녀를 입양하여 부모-자식 관계를 맺을 때 사용합니다.', en: 'Used to legally adopt a child.', zh: '法律上收养子女并建立父母子女关系时使用。', ja: '法的に子を養子にし, 親子関係を結ぶ時使用します.', vi: 'Sử dụng khi nhận con nuôi hợp pháp.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '입양동의서, 신고인 신분증, 증인(2명) 날인', 
      en: 'Adoption consent, Reporter\'s ID, Seals of 2 witnesses', 
      zh: '收养同意书, 申报人身份证, 证人(2名)盖章', 
      ja: '養子縁組同意書, 届出人の身分証明書, 証人(2名)の捺印', 
      vi: 'Giấy đồng ý nhận con nuôi, Thẻ căn cước, Chữ ký 2 người làm chứng' 
    },
  },
  {
    id: 9,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_9_48afcb.png', 'en': '/forms/en/forms_en_9_d81905.png', 'zh': '/forms/cn/forms_cn_9_81f922.png', 'ja': '/forms/jp/forms_jp_9_ce1e5e.png', 'vi': '/forms/vi/forms_vi_9_34538f.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_9_a8f8fd.png'], 'en': ['/guides/en/guides_en_9_f26247.png', '/guides/en/guides_en_9_5302e3.png', '/guides/en/guides_en_9_23494f.png', '/guides/en/guides_en_9_b30a52.png'], 'zh': ['/guides/cn/guides_cn_9_6c2112.png', '/guides/cn/guides_cn_9_719f8c.png', '/guides/cn/guides_cn_9_54c7ed.png'], 'vi': ['/guides/vi/guides_vi_9_0d61b3.png', '/guides/vi/guides_vi_9_fd381e.png', '/guides/vi/guides_vi_9_fbbb27.png']},
    title: { ko: '친양자 파양신고서', en: 'Full Adoption Dissolution', zh: '亲养子罢养申报书', ja: '特別養子離縁届', vi: 'Đơn chấm dứt nhận nuôi đặc biệt' },
    desc: { ko: '친양자 관계를 법적으로 해소하기 위해 작성합니다.', en: 'Written to legally dissolve a full adoption relationship.', zh: '为了法律上解除亲养子关系而填写。', ja: '特別養子関係を法的に解消するために作成します.', vi: 'Dùng để chấm dứt quan hệ con nuôi đặc biệt về mặt pháp lý.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '재판서 정본 및 확정증명서, 신분증', 
      en: 'Certified copy of judgment & finality certificate, ID Card', 
      zh: '裁判书正本及确定证明书, 身份证', 
      ja: '裁判書正本及び確定証明書, 身分証明書', 
      vi: 'Bản sao phán quyết & giấy xác nhận, Thẻ căn cước' 
    },
  },
  {
    id: 10,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_10_420169.png', 'en': '/forms/en/forms_en_10_a644d7.png', 'zh': '/forms/cn/forms_cn_10_be859f.png', 'ja': '/forms/jp/forms_jp_10_4b29a6.png', 'vi': '/forms/vi/forms_vi_10_ca4662.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_10_0090d9.png', '/guides/ko/guides_ko_10_2e9499.png'], 'en': ['/guides/en/guides_en_10_7f24c9.png', '/guides/en/guides_en_10_e139b5.png', '/guides/en/guides_en_10_120fa0.png', '/guides/en/guides_en_10_d05507.png', '/guides/en/guides_en_10_271c4b.png', '/guides/en/guides_en_10_7affed.png', '/guides/en/guides_en_10_2a7690.png', '/guides/en/guides_en_10_e42470.png'], 'zh': ['/guides/cn/guides_cn_10_0711fc.png', '/guides/jp/guides_jp_10_afc891.png', '/guides/jp/guides_jp_10_c8a83d.png', '/guides/jp/guides_jp_10_06586f.png', '/guides/jp/guides_jp_10_6f4676.png', '/guides/jp/guides_jp_10_a6d08a.png', '/guides/jp/guides_jp_10_873ebb.png', '/guides/jp/guides_jp_10_df4123.png'], 'ja': ['/guides/jp/guides_jp_10_ea84a7.png'], 'vi': ['/guides/vi/guides_vi_10_2617d1.png', '/guides/vi/guides_vi_10_57094e.png', '/guides/vi/guides_vi_10_4f7cd1.png', '/guides/vi/guides_vi_10_da2c1f.png', '/guides/vi/guides_vi_10_bfcd63.png', '/guides/vi/guides_vi_10_c3d649.png', '/guides/vi/guides_vi_10_58ac04.png']},
    title: { ko: '혼인신고서', en: 'Marriage Report', zh: '婚姻申报书', ja: '婚姻届', vi: 'Giấy đăng ký kết hôn' },
    desc: { ko: '법적으로 부부가 되었음을 공인받기 위해 제출하는 서류입니다.', en: 'Submitted to be officially recognized as a married couple.', zh: '为了获得法律上成为夫妇的公认而提交的文件。', ja: '法的に夫婦になったことを公認されるために提出する書類です.', vi: 'Văn bản nộp để được công nhận là vợ chồng hợp pháp.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '혼인당사자 신분증, 증인(2명) 정보/서명', 
      en: 'IDs of both spouses, Info/signatures of 2 witnesses', 
      zh: '婚姻当事人身份证, 证人(2名)信息/签名', 
      ja: '婚姻当事者の身分証明書, 証人(2名)の情報/署名', 
      vi: 'Thẻ căn cước vợ chồng, Thông tin/chữ ký 2 người làm chứng' 
    },
    notes: { 
      ko: '외국인과 혼인할 경우 국적을 증명하는 서류(여권 사본 등)가 추가로 필요할 수 있습니다.', 
      en: 'When marrying a foreigner, additional proof of nationality (e.g., passport copy) may be required.', 
      zh: '与外国人结婚时, 可能额外需要证明国籍的材料(如护照复印件等)。', 
      ja: '外国人と婚姻する場合、国籍を証明する書類(パスポートのコピーなど)が追加で必要な場合があります。', 
      vi: 'Khi kết hôn với người nước ngoài, có thể cần thêm giấy tờ chứng minh quốc tịch (bản sao hộ chiếu).' 
    },
  },
  {
    id: 11,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_11_40fadd.png', 'en': '/forms/en/forms_en_11_da022b.png', 'zh': '/forms/cn/forms_cn_11_4ab84e.png', 'ja': '/forms/jp/forms_jp_11_3237af.png', 'vi': '/forms/vi/forms_vi_11_2833ce.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_11_8842b3.png'], 'en': ['/guides/en/guides_en_11_fbe75e.png', '/guides/en/guides_en_11_d2fa0d.png', '/guides/en/guides_en_11_353d5a.png', '/guides/en/guides_en_11_81895b.png'], 'zh': ['/guides/cn/guides_cn_11_a963c8.png', '/guides/jp/guides_jp_11_3cad50.png', '/guides/jp/guides_jp_11_de703c.png', '/guides/jp/guides_jp_11_6b512e.png'], 'ja': ['/guides/jp/guides_jp_11_9a2d28.png'], 'vi': ['/guides/vi/guides_vi_11_3d78e4.png', '/guides/vi/guides_vi_11_5173d8.png']},
    title: { ko: '등록부정정신청서', en: 'Register Correction', zh: '登记簿更正申请', ja: '登録簿訂正申請', vi: 'Đơn xin đính chính đăng ký' },
    desc: { ko: '가족관계등록부의 잘못된 기재 내용을 수정할 때 사용합니다.', en: 'Used to correct errors in the register.', zh: '修正家族关系登记簿中错误的记载内容时使用。', ja: '家族関係登録簿の誤った記載内容を修正する時に使用します.', vi: 'Sử dụng để sửa các nội dung ghi sai trong sổ đăng ký.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '법원 결정문 정본, 신청인 신분증', 
      en: 'Certified copy of court decision, Applicant\'s ID', 
      zh: '法院决定书正本, 申请人身份证', 
      ja: '裁判所の決定文正本, 申請人の身分証明書', 
      vi: 'Bản sao quyết định của tòa án, Thẻ căn cước' 
    },
  },
  {
    id: 12,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_12_2b487c.png', 'en': '/forms/en/forms_en_12_2ed23d.png', 'zh': '/forms/cn/forms_cn_12_e82fc1.png', 'ja': '/forms/jp/forms_jp_12_7a7415.png', 'vi': '/forms/vi/forms_vi_12_161da6.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_12_f131aa.png', '/guides/ko/guides_ko_12_038d53.png'], 'en': ['/guides/en/guides_en_12_1a9738.png', '/guides/en/guides_en_12_2a1057.png', '/guides/en/guides_en_12_cb9e2b.png', '/guides/en/guides_en_12_89cca1.png', '/guides/en/guides_en_12_5684c4.png', '/guides/en/guides_en_12_9455d6.png', '/guides/en/guides_en_12_5938df.png', '/guides/en/guides_en_12_97dc14.png', '/guides/en/guides_en_12_ea287d.png'], 'zh': ['/guides/jp/guides_jp_12_61a113.png', '/guides/jp/guides_jp_12_e75177.png', '/guides/jp/guides_jp_12_355210.png', '/guides/jp/guides_jp_12_6777b0.png', '/guides/jp/guides_jp_12_f805dc.png', '/guides/jp/guides_jp_12_0326a3.png', '/guides/jp/guides_jp_12_b5a41d.png', '/guides/jp/guides_jp_12_bbb7ac.png', '/guides/cn/guides_cn_12_7b2cb1.png'], 'ja': ['/guides/jp/guides_jp_12_990dc5.png'], 'vi': ['/guides/vi/guides_vi_12_fcdab9.png', '/guides/vi/guides_vi_12_49f1d6.png', '/guides/vi/guides_vi_12_3a16aa.png', '/guides/vi/guides_vi_12_5f7316.png', '/guides/vi/guides_vi_12_80985b.png', '/guides/vi/guides_vi_12_76fafe.png', '/guides/vi/guides_vi_12_7a7909.png']},
    title: { ko: '이혼신고서', en: 'Divorce Report', zh: '离婚申报书', ja: '離婚届', vi: 'Giấy báo ly hôn' },
    desc: { ko: '법적 혼인 관계를 해소했음을 신고하는 서류입니다.', en: 'Document reporting the dissolution of a legal marriage.', zh: '申报法律婚姻关系已解除的文件。', ja: '法的婚姻関係を解消したことを届け出る書類です.', vi: 'Văn bản báo cáo việc chấm dứt quan hệ hôn nhân hợp pháp.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '협의이혼의사확인서(또는 재판서 정본), 신분증', 
      en: 'Divorce confirmation (or certified copy of judgment), ID Card', 
      zh: '协议离婚意愿确认书(或裁判书正本), 身份证', 
      ja: '協議離婚意思確認書(または裁判書正本), 身分証明書', 
      vi: 'Xác nhận ly hôn thuận tình (hoặc phán quyết), Thẻ căn cước' 
    },
  },
  {
    id: 13,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_13_9a4bb5.png', 'en': '/forms/en/forms_en_13_4fb534.png', 'zh': '/forms/cn/forms_cn_13_e7e858.png', 'ja': '/forms/jp/forms_jp_13_603dd0.png', 'vi': '/forms/vi/forms_vi_13_7d6a61.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_13_a5e074.png'], 'en': ['/guides/en/guides_en_13_49d1f8.png', '/guides/en/guides_en_13_b3e49a.png', '/guides/en/guides_en_13_d8cd00.png'], 'zh': ['/guides/cn/guides_cn_13_771042.png', '/guides/cn/guides_cn_13_fc5d4a.png', '/guides/cn/guides_cn_13_714999.png'], 'vi': ['/guides/vi/guides_vi_13_da9491.png', '/guides/vi/guides_vi_13_88864b.png']},
    title: { ko: '창성신고서', en: 'Surname Creation', zh: '创姓申报书', ja: '創姓届', vi: 'Đơn báo cáo lập họ' },
    desc: { ko: '새로운 성(姓)을 만들어 등록할 때 제출합니다.', en: 'Submitted when creating and registering a new surname.', zh: '创立并登记新姓氏时提交. ', ja: '新しい氏を作って登録する時に提出します.', vi: 'Nộp khi tạo và đăng ký một họ mới.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '법원 허가 결정문 정본, 신분증', 
      en: 'Certified copy of court approval, ID Card', 
      zh: '法院许可决定书正本, 身份证', 
      ja: '裁判所の許可決定文正本, 身分証明書', 
      vi: 'Bản sao quyết định của tòa án, Thẻ căn cước' 
    },
  },
  {
    id: 14,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_14_77e087.png', 'zh': '/forms/cn/forms_cn_14_8637b8.png', 'ja': '/forms/jp/forms_jp_14_7ca1bd.png', 'vi': '/forms/vi/forms_vi_14_b07433.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_14_1c261c.png'], 'zh': ['/guides/cn/guides_cn_14_6fe15c.png', '/guides/cn/guides_cn_14_2c41da.png', '/guides/cn/guides_cn_14_655bb8.png', '/guides/cn/guides_cn_14_3c222e.png'], 'vi': ['/guides/vi/guides_vi_14_df982c.png', '/guides/vi/guides_vi_14_46d044.png', '/guides/vi/guides_vi_14_3a03ce.png']},
    title: { ko: '친양자 입양신고서', en: 'Full Adoption Report', zh: '亲养子收养申报', ja: '特別養子縁組届', vi: 'Đăng ký nhận con nuôi đặc biệt' },
    desc: { ko: '친생자와 동일한 권리를 갖는 친양자를 입양할 때 사용합니다.', en: 'Used for full adoption giving same rights as biological children.', zh: '收养与亲生子女具有相同法律权利的亲养子时使用。', ja: '実子と同一の法的権利を持つ特別養子を縁組する時に使用します.', vi: 'Sử dụng khi nhận con nuôi đặc biệt.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '재판서 정본 및 확정증명서, 신분증', 
      en: 'Certified copy of judgment & finality certificate, ID Card', 
      zh: '裁判书正本及确定证明书, 身份证', 
      ja: '裁判書正本及び確定証明書, 身分証明書', 
      vi: 'Bản sao phán quyết & giấy xác nhận, Thẻ căn cước' 
    },
  },
  {
    id: 15,
    cat: 'FAMILY',
    images: {'ko': '/forms/ko/forms_ko_15_cdd348.png', 'zh': '/forms/cn/forms_cn_15_fc1e21.png', 'ja': '/forms/jp/forms_jp_15_81c5b5.png', 'vi': '/forms/vi/forms_vi_15_cc903e.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_15_c38b8f.png'], 'zh': ['/guides/cn/guides_cn_15_8ec0c2.png', '/guides/cn/guides_cn_15_739610.png'], 'vi': ['/guides/vi/guides_vi_15_9f4609.png', '/guides/vi/guides_vi_15_79e58c.png']},
    title: { ko: '혼인신고시 자녀의 성과 본 협의', en: 'Agreement on Child Surname', zh: '婚姻申报时姓本协议', ja: '婚姻届出時の氏本協議', vi: 'Thỏa thuận về họ của con' },
    desc: { ko: '혼인 시 장래 자녀의 성을 어머니의 성으로 따르기로 할 때 작성합니다.', en: "Agreed to follow the mother's surname for future children.", zh: '结婚时协议未来子女随母姓时填写。', ja: '婚姻時, 将来の子の氏を母の氏に従うことに合意した時に作成します.', vi: 'Lập khi kết hôn nếu thỏa thuận con cái sẽ theo họ mẹ.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '혼인신고 시 함께 제출 (협의서)', 
      en: 'Submit with marriage report (Agreement form)', 
      zh: '随婚姻申报一并提交 (协议书)', 
      ja: '婚姻届と一緒に提出 (協議書)', 
      vi: 'Nộp cùng đăng ký kết hôn (Bản thỏa thuận)' 
    },
  },
  {
    id: 16,
    cat: 'CERT',
    images: {'ko': '/forms/ko/forms_ko_16_734461.png', 'en': '/forms/en/forms_en_16_80aea9.png', 'zh': '/forms/cn/forms_cn_16_3692e0.png', 'ja': '/forms/jp/forms_jp_16_42ee61.png', 'vi': '/forms/vi/forms_vi_16_cad3f5.png'},
    title: { ko: '가족관계증명서', en: 'Family Relation Certificate', zh: '家族关系证明书', ja: '家族関係証明書', vi: 'Giấy chứng nhận quan hệ gia đình' },
    desc: { ko: '부모, 배우자, 자녀 등 가족 구성원을 증명하는 서류입니다.', en: 'Proves family members (parents, spouse, children).', zh: '证明父母、配偶、子女等家庭成员的文件。', ja: '両親, 配偶者, 子供など家族構成員を証明する書類です.', vi: 'Giấy tờ chứng minh các thành viên trong gia đình.' },
    fee: { ko: '1,000원', en: '1,000 KRW', zh: '1,000 韩元', ja: '1,000ウォン', vi: '1,000 KRW' },
    requirements: { 
      ko: '본인 신분증, 신청서', 
      en: 'Your ID Card, Application form', 
      zh: '本人身份证, 申请表', 
      ja: '本人の身分証明書, 申請書', 
      vi: 'Thẻ căn cước, Đơn đăng ký' 
    },
    notes: { 
      ko: '무인민원발급기 이용 시 500원, 인터넷 발급 시 무료입니다.', 
      en: '500 KRW at kiosks, free online.', 
      zh: '使用无人机办理500韩元, 网上办理免费。', 
      ja: '無人発給機利用時500ウォン, インターネット発給時無料です.', 
      vi: '500 KRW tại máy tự động, miễn phí trực tuyến.' 
    },
  },
  {
    id: 17,
    cat: 'CERT',
    images: {'ko': '/forms/ko/forms_ko_17_4f6d67.png', 'en': '/forms/en/forms_en_17_21ec1b.png', 'zh': '/forms/cn/forms_cn_17_a04653.png', 'ja': '/forms/jp/forms_jp_17_0f6612.png', 'vi': '/forms/vi/forms_vi_17_f079c7.png'},
    title: { ko: '기본증명서', en: 'Basic Certificate', zh: '基本证明书', ja: '基本証明書', vi: 'Giấy chứng nhận cơ bản' },
    desc: { ko: '본인의 출생, 개명 등 기본적인 사항을 증명합니다.', en: 'Proves basic personal info such as birth and name change.', zh: '证明本人出生、改名等基本身份事项的文件. ', ja: '本人の出生, 改名など基本的な身分事項を証明する書類です.', vi: 'Giấy tờ chứng minh ngày sinh, đổi tên.' },
    fee: { ko: '1,000원', en: '1,000 KRW', zh: '1,000 韩元', ja: '1,000ウォン', vi: '1,000 KRW' },
    requirements: { 
      ko: '본인 신분증, 신청서', 
      en: 'Your ID Card, Application form', 
      zh: '本人身份证, 申请表', 
      ja: '本人の身分証明書, 申請書', 
      vi: 'Thẻ căn cước, Đơn đăng ký' 
    },
  },
  {
    id: 18,
    cat: 'CERT',
    images: {'ko': '/forms/ko/forms_ko_18_e594f5.png', 'en': '/forms/en/forms_en_18_b60bdd.png', 'zh': '/forms/cn/forms_cn_18_c1ed91.png', 'ja': '/forms/jp/forms_jp_18_121e51.png', 'vi': '/forms/vi/forms_vi_18_1c6730.png'},
    title: { ko: '입양관계증명서', en: 'Adoption Certificate', zh: '收养关系证明书', ja: '養子縁組関係証明書', vi: 'Giấy chứng nhận quan hệ nuôi con' },
    desc: { ko: '일반 입양 사실을 증명하는 서류를 신청할 때 사용합니다.', en: 'Used to prove general adoption facts.', zh: '证明一般收养事实的文件. ', ja: '一般養子縁組の事実を証明する書類です.', vi: 'Giấy tờ chứng minh việc nhận con nuôi thông thường.' },
    fee: { ko: '1,000원', en: '1,000 KRW', zh: '1,000 韩元', ja: '1,000ウォン', vi: '1,000 KRW' },
    requirements: { 
      ko: '본인 신분증, 신청서', 
      en: 'Your ID Card, Application form', 
      zh: '本人身份证, 申请表', 
      ja: '本人の身分証明書, 申請書', 
      vi: 'Thẻ căn cước, Đơn đăng ký' 
    },
  },
  {
    id: 19,
    cat: 'CERT',
    images: {'ko': '/forms/ko/forms_ko_19_faedd1.png', 'en': '/forms/en/forms_en_19_bae0fa.png', 'zh': '/forms/cn/forms_cn_19_62ee41.png', 'ja': '/forms/jp/forms_jp_19_6269c4.png', 'vi': '/forms/vi/forms_vi_19_cde4a7.png'},
    title: { ko: '친양자입양관계증명서', en: 'Full Adoption Certificate', zh: '亲养子收养证明书', ja: '特別養子縁組証明書', vi: 'Giấy chứng nhận nuôi con đặc biệt' },
    desc: { ko: '친양자 입양 사실을 증명하는 서류를 신청합니다.', en: 'Proves full adoption facts.', zh: '证明亲养子收养事实的文件. ', ja: '特別養子縁組の事実を証明する書類です.', vi: 'Giấy tờ chứng minh việc nhận con nuôi đặc biệt.' },
    fee: { ko: '1,000원', en: '1,000 KRW', zh: '1,000 韩元', ja: '1,000ウォン', vi: '1,000 KRW' },
    requirements: { 
      ko: '본인 신분증, 신청서', 
      en: 'Your ID Card, Application form', 
      zh: '本人身份证, 申请表', 
      ja: '本人の身分証明書, 申請書', 
      vi: 'Thẻ căn cước, Đơn đăng ký' 
    },
  },
  {
    id: 20,
    cat: 'CERT',
    images: {'ko': '/forms/ko/forms_ko_20_ae28ef.png', 'en': '/forms/en/forms_en_20_23ce58.png', 'zh': '/forms/cn/forms_cn_20_62463b.png', 'ja': '/forms/jp/forms_jp_20_4aecfb.png', 'vi': '/forms/vi/forms_vi_20_75328d.png'},
    title: { ko: '혼인관계증명서', en: 'Marriage Certificate', zh: '婚姻关系证明书', ja: '婚姻関係証明書', vi: 'Giấy chứng nhận quan hệ hôn nhân' },
    desc: { ko: '본인의 혼인 및 이혼 여부를 증명하는 서류입니다.', en: 'Proves marriage or divorce status.', zh: '证明本人婚姻及离婚情况的文件. ', ja: '本人の婚姻および離婚の有無を証明する書類です.', vi: 'Giấy tờ chứng minh tình trạng hôn nhân và ly hôn.' },
    fee: { ko: '1,000원', en: '1,000 KRW', zh: '1,000 韩元', ja: '1,000ウォン', vi: '1,000 KRW' },
    requirements: { 
      ko: '본인 신분증, 신청서', 
      en: 'Your ID Card, Application form', 
      zh: '本人身份证, 申请表', 
      ja: '本人の身分証明書, 申請書', 
      vi: 'Thẻ căn cước, Đơn đăng ký' 
    },
  },
  {
    id: 21,
    cat: 'RESIDENCE',
    images: {'ko': '/forms/ko/forms_ko_21_bd6245.png', 'en': '/forms/en/forms_en_21_c2f7bf.png', 'zh': '/forms/cn/forms_cn_21_5a9db9.png', 'ja': '/forms/jp/forms_jp_21_485e16.png', 'vi': '/forms/vi/forms_vi_21_0942fe.png'},
    guideImages: {'en': ['/guides/en/guides_en_21_f165b7.png'], 'zh': ['/guides/cn/guides_cn_21_fb5fad.png', '/guides/cn/guides_cn_21_fdedbb.png'], 'vi': ['/guides/vi/guides_vi_21_e5fcea.png']},
    title: { ko: '국내거소이전신고서', en: 'Residence Change Report', zh: '国内住所转移申报', ja: '国内居所移転届', vi: 'Báo cáo chuyển nơi cư trú' },
    desc: { ko: '국내 거주지를 옮겼을 때 새로운 주소지를 신고합니다.', en: 'Report a new address when moving within Korea.', zh: '国内居住地搬迁时申报新住所. ', ja: '国内の居住地を移した時に新しい住所地を届け出ます.', vi: 'Báo cáo địa chỉ mới khi chuyển nơi cư trú trong nước.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '외국인국내거소신고증, 주소지 입증서류', 
      en: 'Domestic Residence Report Card, Proof of address', 
      zh: '外国人国内住所转移申报证, 住所证明材料', 
      ja: '外国人国内居所申告証, 住所立証書類', 
      vi: 'Thẻ cư trú, Giấy tờ chứng minh địa chỉ' 
    },
  },
  {
    id: 22,
    cat: 'ID_SEAL',
    images: {'ko': '/forms/ko/forms_ko_22_32f756.png', 'en': '/forms/en/forms_en_22_d0be0b.png', 'zh': '/forms/cn/forms_cn_22_ca2f04.png', 'ja': '/forms/jp/forms_jp_22_380198.png', 'vi': '/forms/vi/forms_vi_22_bf2b40.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_22_ae76f2.png'], 'en': ['/guides/en/guides_en_22_48d52f.png', '/guides/en/guides_en_22_8fff65.png', '/guides/en/guides_en_22_1bff13.png', '/guides/en/guides_en_22_bae055.png'], 'zh': ['/guides/cn/guides_cn_22_5fd168.png', '/guides/jp/guides_jp_22_0b8216.png', '/guides/jp/guides_jp_22_8e86e2.png', '/guides/jp/guides_jp_22_96a8d6.png'], 'ja': ['/guides/jp/guides_jp_22_4a9d97.png'], 'vi': ['/guides/vi/guides_vi_22_fbada5.png', '/guides/vi/guides_vi_22_5fed7e.png', '/guides/vi/guides_vi_22_4fe122.png', '/guides/vi/guides_vi_22_3cf102.png']},
    title: { ko: '인감보호신청/해제신청서', en: 'Seal Protection/Release', zh: '印章保护申请/解除', ja: '印鑑保護申請/解除', vi: 'Đơn xin bảo hộ/hủy ấn dấu' },
    desc: { ko: '인감 도용 방지를 위해 본인 외 발급을 제한하거나 해제합니다.', en: 'Restrict or release seal issuance to others.', zh: '为防止印章被盗用, 限制或解除发放. ', ja: '印鑑の盗用防止のために発行を制限したり解除したりします.', vi: 'Hạn chế hoặc hủy bỏ việc cấp ấn dấu cho người khác.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '본인 신분증 (대리 불가)', 
      en: 'Your ID Card (Proxy not allowed)', 
      zh: '本人身份证 (不可代办)', 
      ja: '本人の身分証明書 (代理不可)', 
      vi: 'Thẻ căn cước (Không được ủy quyền)' 
    },
  },
  {
    id: 23,
    cat: 'FAMILY',
    images: {'en': '/forms/en/forms_en_23_e72a4a.png', 'zh': '/forms/cn/forms_cn_23_4d467e.png', 'ja': '/forms/jp/forms_jp_23_fc772f.png', 'vi': '/forms/vi/forms_vi_23_69ffa5.png'},
    guideImages: {'en': ['/guides/en/guides_en_23_daa03f.png'], 'zh': ['/guides/cn/guides_cn_23_2d23a3.png', '/guides/cn/guides_cn_23_fd1ddb.png'], 'vi': ['/guides/vi/guides_vi_23_61388c.png']},
    title: { ko: '정정신고서', en: 'Correction Report', zh: '更正申报书', ja: '訂正届', vi: 'Đơn báo cáo đính chính' },
    desc: { ko: '기존 신고 내용의 오류를 수정할 때 작성합니다.', en: 'Written to correct errors in previous reports.', zh: '之前申报的内容有误需要修正时填写. ', ja: '以前の届出内容に誤りがあり, 修正が必要な時に作成します.', vi: 'Lập khi cần sửa đổi sai sót trong báo cáo trước đó.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '잘못 기재된 내용 증빙 서류, 신분증', 
      en: 'Proof of error, ID Card', 
      zh: '错报内容证明材料, 身份证', 
      ja: '誤記内容の証拠書類, 身分証明書', 
      vi: 'Giấy tờ chứng minh sai sót, Thẻ căn cước' 
    },
  },
  {
    id: 24,
    cat: 'ID_SEAL',
    images: {'ko': '/forms/ko/forms_ko_24_f8a392.png', 'en': '/forms/en/forms_en_24_87d6bf.png', 'zh': '/forms/cn/forms_cn_24_3aee87.png', 'ja': '/forms/jp/forms_jp_24_55ab24.png', 'vi': '/forms/vi/forms_vi_24_555f83.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_24_6711d5.png'], 'en': ['/guides/en/guides_en_24_118122.png', '/guides/en/guides_en_24_8fe1c7.png', '/guides/en/guides_en_24_373e3d.png', '/guides/en/guides_en_24_8146fb.png', '/guides/en/guides_en_24_0fb088.png'], 'zh': ['/guides/cn/guides_cn_24_483329.png', '/guides/jp/guides_jp_24_0bc2f8.png', '/guides/jp/guides_jp_24_c78fb7.png', '/guides/jp/guides_jp_24_2aa345.png', '/guides/jp/guides_jp_24_d687b5.png'], 'ja': ['/guides/jp/guides_jp_24_dc38e4.png'], 'vi': ['/guides/vi/guides_vi_24_2a375e.png', '/guides/vi/guides_vi_24_ed90ea.png', '/guides/vi/guides_vi_24_a133d5.png', '/guides/vi/guides_vi_24_cd7e7a.png']},
    title: { ko: '인감(변경)신고서(서면)', en: 'Seal Registration', zh: '印章(变更)申报', ja: '印鑑(変更)届', vi: 'Báo cáo thay đổi ấn dấu' },
    desc: { ko: '새로운 인감을 등록하거나 기존 인감을 변경할 때 사용합니다.', en: 'Used to register or change a personal seal.', zh: '登记新印章或变更现有印章时使用. ', ja: '新しい印鑑を登録したり既存の印鑑を変更する時に使用します.', vi: 'Sử dụng khi đăng ký ấn dấu mới.' },
    fee: { ko: '600원', en: '600 KRW', zh: '600 韩元', ja: '600ウォン', vi: '600 KRW' },
    requirements: { 
      ko: '인감도장, 신분증', 
      en: 'Personal seal (Stamp), ID Card', 
      zh: '印章, 身份证', 
      ja: '印鑑, 身分証明書', 
      vi: 'Ấn dấu, Thẻ căn cước' 
    },
    notes: { 
      ko: '최초 신고는 반드시 본인이 방문해야 합니다.', 
      en: 'First registration must be done in person.', 
      zh: '首次申报必须本人亲自前往。', 
      ja: '初回届出は必ず本人が訪問する必要があります.', 
      vi: 'Lần đầu đăng ký phải trực tiếp đến cơ quan.' 
    },
  },
  {
    id: 25,
    cat: 'ID_SEAL',
    images: {'ko': '/forms/ko/forms_ko_25_dfd190.png', 'en': '/forms/en/forms_en_25_1ca6c9.png', 'zh': '/forms/cn/forms_cn_25_d906ef.png', 'ja': '/forms/jp/forms_jp_25_a63310.png', 'vi': '/forms/vi/forms_vi_25_7ee0d4.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_25_ca424e.png', '/guides/ko/guides_ko_25_51e8f5.png'], 'en': ['/guides/en/guides_en_25_31ae45.png', '/guides/en/guides_en_25_508923.png', '/guides/en/guides_en_25_686c71.png'], 'zh': ['/guides/cn/guides_cn_25_087d57.png', '/guides/cn/guides_cn_25_f1de85.png', '/guides/cn/guides_cn_25_4051b5.png'], 'vi': ['/guides/vi/guides_vi_25_bef263.png', '/guides/vi/guides_vi_25_3352c7.png', '/guides/vi/guides_vi_25_1cd5f9.png']},
    title: { ko: '인감증명 위임장', en: 'POA for Seal Certificate', zh: '印章证明委托书', ja: '印鑑証明委任状', vi: 'Giấy ủy quyền ấn dấu' },
    desc: { ko: '대리인이 인감증명을 발급받을 때 작성합니다.', en: 'Written when a representative gets a seal certificate.', zh: '由代理人领取印章证明时填写. ', ja: '代理人が印鑑証明を受け取る時に作成します.', vi: 'Lập khi người đại diện đi lấy chứng nhận ấn dấu.' },
    fee: { ko: '600원', en: '600 KRW', zh: '600 韩元', ja: '600ウォン', vi: '600 KRW' },
    requirements: { 
      ko: '위임자 신분증, 수임인 신분증, 위임장', 
      en: 'Delegator\'s ID, Representative\'s ID, POA form', 
      zh: '委托人身份证, 受托人身份证, 委托书', 
      ja: '委任者の身分証明書, 受任者の身分証明書, 委任状', 
      vi: 'Thẻ căn cước người ủy quyền & người nhận, Giấy ủy quyền' 
    },
  },
  {
    id: 26,
    cat: 'ID_SEAL',
    images: {'ko': '/forms/ko/forms_ko_26_2fdfa5.png', 'en': '/forms/en/forms_en_26_b4dee6.png', 'zh': '/forms/cn/forms_cn_26_c5db91.png', 'ja': '/forms/jp/forms_jp_26_ac3cae.png', 'vi': '/forms/vi/forms_vi_26_7cdea9.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_26_2fdfa5.png'], 'en': ['/guides/en/guides_en_26_d32291.png', '/guides/en/guides_en_26_8a6e12.png', '/guides/en/guides_en_26_fe1d9b.png'], 'zh': ['/guides/cn/guides_cn_26_c7dd4e.png', '/guides/jp/guides_jp_26_d83950.png', '/guides/jp/guides_jp_26_4bd0bd.png', '/guides/jp/guides_jp_26_e4662b.png'], 'ja': ['/guides/jp/guides_jp_26_90f2b2.png'], 'vi': ['/guides/vi/guides_vi_26_54b884.png', '/guides/vi/guides_vi_26_86f745.png', '/guides/vi/guides_vi_26_de1375.png']},
    title: { ko: '인감 상태 변경 신고서', en: 'Seal Status Change', zh: '印章状态变更', ja: '印鑑状態変更', vi: 'Báo cáo trạng thái ấn dấu' },
    desc: { ko: '인감의 말소, 부활, 사망 신고 등을 할 때 제출합니다.', en: 'Submitted for cancellation or restoration of a seal.', zh: '进行印章的注销、恢复、死亡申报等. ', ja: '印鑑の抹消, 復活, 死亡届などをする時に提出します.', vi: 'Nộp khi báo cáo hủy hoặc khôi phục ấn dấu.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '신분증, 사유 증빙 서류', 
      en: 'ID Card, Proof of reason', 
      zh: '身份证, 原因证明材料', 
      ja: '身分証明書, 理由の証明書類', 
      vi: 'Thẻ căn cước, Giấy tờ chứng minh lý do' 
    },
  },
  {
    id: 27,
    cat: 'RESIDENCE',
    images: {'ko': '/forms/ko/forms_ko_27_42102c.png', 'en': '/forms/en/forms_en_27_66842c.png', 'zh': '/forms/cn/forms_cn_27_fae1e4.png', 'ja': '/forms/jp/forms_jp_27_e4f3c6.png', 'vi': '/forms/vi/forms_vi_27_4786df.png'},
    guideImages: {'en': ['/guides/en/guides_en_27_168e69.png'], 'zh': ['/guides/cn/guides_cn_27_23739d.png', '/guides/cn/guides_cn_27_0e4814.png'], 'vi': ['/guides/vi/guides_vi_27_a0957d.png']},
    title: { ko: '체류지변경신고서', en: 'Change of Residence', zh: '滞留地变更申报', ja: '滞留地変更届', vi: 'Thay đổi nơi tạm trú' },
    desc: { ko: '외국인이 국내 체류지를 변경했을 때 신고하는 서류입니다.', en: 'For foreigners reporting change of residence in Korea.', zh: '外国人在国内变更滞留地时申报的文件. ', ja: '外国人が国内の滞留地を変更した時に届け出る書類です.', vi: 'Báo cáo khi người nước ngoài thay đổi nơi tạm trú.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '외국인등록증, 임대차계약서 등 거주지 서류', 
      en: 'Foreigner registration card, Lease agreement, etc.', 
      zh: '外国人登录证, 租赁合同等住所证明材料', 
      ja: '外国人登録証, 賃貸借契約書などの住所書類', 
      vi: 'Thẻ đăng ký người nước ngoài, Hợp đồng thuê nhà' 
    },
    notes: { 
      ko: '변경일로부터 15일 이내에 신고해야 하며, 지연 시 과태료가 발생할 수 있습니다.', 
      en: 'Must report within 15 days of moving; delays may incur fines.', 
      zh: '须在变更之日起15日内申报, 逾期可能产生罚款。', 
      ja: '変更日から15日以内に届け出る必要があり, 遅延すると過料が発生する場合があります.', 
      vi: 'Phải báo cáo trong vòng 15 ngày; chậm trễ có thể bị phạt.' 
    },
  },
  {
    id: 28,
    cat: 'RESIDENCE',
    images: {'en': '/forms/en/forms_en_28_087add.png', 'vi': '/forms/vi/forms_vi_28_8728a7.png'},
    guideImages: {'en': ['/guides/en/guides_en_28_ba5446.png', '/guides/en/guides_en_28_328246.png'], 'vi': ['/guides/vi/guides_vi_28_e95a12.png', '/guides/vi/guides_vi_28_adaaf7.png']},
    title: { ko: '체류지변경 위임장', en: 'POA for Residence Change', zh: '住所转移委托书', ja: '居所移転委任状', vi: 'Ủy quyền thay đổi cư trú' },
    desc: { ko: '체류지 변경 신고를 대리인에게 위임할 때 작성합니다.', en: 'To delegate residence change reporting to a rep.', zh: '将滞留地变更申报委托给代理人. ', ja: '滞留地変更届を代理人に委任する時に作成します.', vi: 'Lập khi ủy quyền báo cáo thay đổi nơi tạm trú.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '위임인 외국인등록증 사본, 대리인 신분증', 
      en: 'Copy of delegator\'s ID, Representative\'s ID', 
      zh: '委托人外国人登录证复印件, 代理人身份证', 
      ja: '委任人の外国人登録証のコピー, 代理人の身分証明書', 
      vi: 'Bản sao thẻ người nước ngoài, Thẻ căn cước người đại diện' 
    },
  },
  {
    id: 29,
    cat: 'CERT',
    images: {'en': '/forms/en/forms_en_29_f41520.png', 'zh': '/forms/cn/forms_cn_29_c0098f.png', 'ja': '/forms/jp/forms_jp_29_91e4c4.png', 'vi': '/forms/vi/forms_vi_29_1858fa.png'},
    guideImages: {'en': ['/guides/en/guides_en_29_e61805.png', '/guides/en/guides_en_29_0c21b6.png'], 'vi': ['/guides/vi/guides_vi_29_981eda.png', '/guides/vi/guides_vi_29_de8ad7.png']},
    title: { ko: '출입국사실증명서', en: 'Entry/Exit Certificate', zh: '出入境事实证明', ja: '出入国事実証明', vi: 'Giấy chứng nhận xuất nhập cảnh' },
    desc: { ko: '일정 기간 동안의 출입국 기록을 증명받기 위해 신청합니다.', en: 'Request to prove entry/exit records.', zh: '证明一定期间内的出入境记录. ', ja: '一定期間の出入国記録を証明してもらうために申請します.', vi: 'Xác nhận lịch sử xuất nhập cảnh.' },
    fee: { ko: '2,000원', en: '2,000 KRW', zh: '2,000 韩元', ja: '2,000ウォン', vi: '2,000 KRW' },
    requirements: { 
      ko: '외국인등록증(또는 여권), 신분증', 
      en: 'Foreigner registration card (or Passport), ID Card', 
      zh: '外国人登录证(或护照), 身份证', 
      ja: '外国人登録証(またはパスポート), 身分証明書', 
      vi: 'Thẻ đăng ký người nước ngoài (Hộ chiếu), Thẻ căn cước' 
    },
  },
  {
    id: 30,
    cat: 'RESIDENCE',
    images: {'zh': '/forms/cn/forms_cn_30_cb8b8b.png', 'ja': '/forms/jp/forms_jp_30_f6df73.png', 'vi': '/forms/vi/forms_vi_30_3f8dd2.png'},
    guideImages: {'zh': ['/guides/cn/guides_cn_30_a4a866.png', '/guides/cn/guides_cn_30_d39d69.png', '/guides/cn/guides_cn_30_5c938f.png'], 'vi': ['/guides/vi/guides_vi_30_c3dcb6.png', '/guides/vi/guides_vi_30_8503f8.png']},
    title: { ko: '출입국사실증명 위임장', en: 'POA for Entry/Exit Cert', zh: '出入境证明委托', ja: '出入国証明委任', vi: 'Ủy quyền cấp giấy XNC' },
    desc: { ko: '출입국 사실증명서 발급을 대리인에게 맡길 때 작성합니다.', en: 'To delegate entry/exit certificate issuance.', zh: '将出入境事实证明书的发放交给代理人. ', ja: '出入国事実証明書の発行を代理人に任せる時に作成します.', vi: 'Ủy quyền lấy giấy chứng nhận xuất nhập cảnh.' },
    fee: { ko: '2,000원', en: '2,000 KRW', zh: '2,000 韩元', ja: '2,000ウォン', vi: '2,000 KRW' },
    requirements: { 
      ko: '위임장, 위임자 신분증 사본, 대리인 신분증', 
      en: 'POA form, Copy of delegator\'s ID, Representative\'s ID', 
      zh: '委托书, 委托人身份证复印件, 代理人身份证', 
      ja: '委任状, 委任者の身分証明書のコピー, 代理人の身分証明書', 
      vi: 'Giấy ủy quyền, Bản sao thẻ căn cước, Thẻ căn cước người đại diện' 
    },
  },
  {
    id: 31,
    cat: 'RESIDENCE',
    images: {'ko': '/forms/ko/forms_ko_31_73e388.png', 'en': '/forms/en/forms_en_31_1cd9b1.png', 'ja': '/forms/jp/forms_jp_31_9ca610.png', 'vi': '/forms/vi/forms_vi_31_e78fcc.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_31_92b6b2.png'], 'en': ['/guides/en/guides_en_31_d49b28.png', '/guides/en/guides_en_31_db7d9d.png', '/guides/en/guides_en_31_95aa7e.png', '/guides/en/guides_en_31_439fd0.png', '/guides/en/guides_en_31_7710f0.png', '/guides/en/guides_en_31_6c3972.png'], 'ja': ['/guides/jp/guides_jp_31_cb3e13.png'], 'vi': ['/guides/vi/guides_vi_31_63d669.png', '/guides/vi/guides_vi_31_f8bfb8.png', '/guides/vi/guides_vi_31_0bead8.png', '/guides/vi/guides_vi_31_b2e23e.png', '/guides/vi/guides_vi_31_5dc1c4.png', '/guides/vi/guides_vi_31_60c5dd.png']},
    title: { ko: '주민등록표 신청서', en: 'Resident Register App', zh: '居民登记表申请', ja: '住民登録票申請', vi: 'Đơn cấp bản sao sổ hộ khẩu' },
    desc: { ko: '주민등록 등본이나 초본을 발급받기 위해 신청합니다.', en: 'Request to issue a resident register copy.', zh: '领取居民登记誊本或抄本. ', ja: '住民登録の謄本や抄本を発行してもらうために申請します.', vi: 'Đăng ký lấy bản sao sổ hộ khẩu.' },
    fee: { ko: '400원', en: '400 KRW', zh: '400 韩元', ja: '400ウォン', vi: '400 KRW' },
    requirements: { 
      ko: '본인 신분증', 
      en: 'Your ID Card', 
      zh: '本人身份证', 
      ja: '本人の身分証明書', 
      vi: 'Thẻ căn cước' 
    },
    notes: { 
      ko: '인터넷 발급 시 무료입니다.', 
      en: 'Free online.', 
      zh: '网上办理免费。', 
      ja: 'インターネット発給時無料です.', 
      vi: 'Miễn phí trực tuyến.' 
    },
  },
  {
    id: 32,
    cat: 'RESIDENCE',
    images: {'ko': '/forms/ko/forms_ko_32_643855.png', 'en': '/forms/en/forms_en_32_ebf7d3.png', 'ja': '/forms/jp/forms_jp_32_fd8fdf.png', 'vi': '/forms/vi/forms_vi_32_419b0a.png'},
    guideImages: {'ko': ['/guides/ko/guides_ko_32_14872e.png'], 'en': ['/guides/en/guides_en_32_802931.png', '/guides/en/guides_en_32_93a0ce.png', '/guides/en/guides_en_32_ee1354.png'], 'vi': ['/guides/vi/guides_vi_32_c425b2.png', '/guides/vi/guides_vi_32_af2b2a.png']},
    title: { ko: '주민등록신고서', en: 'Resident Registration', zh: '居民登记申报', ja: '住民登録届', vi: 'Báo cáo đăng ký cư trú' },
    desc: { ko: '전입, 전출 등 주민등록 사항을 신고할 때 사용합니다.', en: 'Used for resident registration like moving in/out.', zh: '申报迁入、迁出等居民登记事项. ', ja: '転入, 転出など住民登録事項を届け出る時に使用します.', vi: 'Báo cáo các vấn đề đăng ký cư trú.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '전입지 계약서, 신분증', 
      en: 'Lease agreement, ID Card', 
      zh: '迁入地合同, 身份证', 
      ja: '転入地契約書, 身分証明書', 
      vi: 'Hợp đồng thuê nhà, Thẻ căn cước' 
    },
  },
  {
    id: 33,
    cat: 'ID_SEAL',
    images: {'ko': '/forms/ko/forms_ko_33_1b3d5c.png', 'en': '/forms/en/forms_en_33_b38490.png', 'zh': '/forms/cn/forms_cn_33_601c91.png', 'ja': '/forms/jp/forms_jp_33_aea75a.png', 'vi': '/forms/vi/forms_vi_33_2a1418.png'},
    guideImages: {'en': ['/guides/en/guides_en_33_379022.png', '/guides/en/guides_en_33_d79c84.png'], 'vi': ['/guides/vi/guides_vi_33_a754c6.png', '/guides/vi/guides_vi_33_d422d5.png']},
    title: { ko: '주민등록증 분실신고서', en: 'Lost ID Card Report', zh: '居民身份证丢失申报', ja: '住民登録証紛失届', vi: 'Báo cáo mất thẻ căn cước' },
    desc: { ko: '주민등록증을 잃어버렸을 때 도용 방지를 위해 신고합니다.', en: 'Report a lost ID card to prevent misuse.', zh: '丢失居民身份证时为防止被盗用而申报. ', ja: '住民登録証を紛失した時, 盗用防止のために届け出ます.', vi: 'Báo cáo khi mất thẻ căn cước.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '본인 확인 절차(지문 등)', 
      en: 'Identity verification (e.g., fingerprints)', 
      zh: '身份确认程序(指纹等)', 
      ja: '本人確認手続き(指紋など)', 
      vi: 'Xác minh danh tính (vân tay...)' 
    },
    notes: { 
      ko: '분실 신고는 인터넷(정부24)으로도 가능합니다.', 
      en: 'Lost reports can also be made online (Gov24).', 
      zh: '也可以在网上(政府24)进行丢失申报。', 
      ja: '紛失届はインターネット(政府24)でも可能です.', 
      vi: 'Có thể báo mất trực tuyến (Gov24).' 
    },
  },
  {
    id: 34,
    cat: 'RESIDENCE',
    images: {'ko': '/forms/ko/forms_ko_34_753ade.png', 'en': '/forms/en/forms_en_34_6dd162.png', 'ja': '/forms/jp/forms_jp_34_6b7289.png', 'vi': '/forms/vi/forms_vi_34_2f0107.png'},
    guideImages: {'en': ['/guides/en/guides_en_34_2e24f2.png', '/guides/en/guides_en_34_20bd77.png', '/guides/en/guides_en_34_99ebe0.png', '/guides/en/guides_en_34_9bf465.png', '/guides/en/guides_en_34_84697c.png', '/guides/en/guides_en_34_1d2849.png'], 'ja': ['/guides/jp/guides_jp_34_3f7682.png'], 'vi': ['/guides/vi/guides_vi_34_cdb31e.png', '/guides/vi/guides_vi_34_75da88.png', '/guides/vi/guides_vi_34_79de79.png', '/guides/vi/guides_vi_34_55d092.png', '/guides/vi/guides_vi_34_b89661.png']},
    title: { ko: '주민등록표 발급 위임장', en: 'POA for Resident Register', zh: '居民登记表委托', ja: '住民登録票委任状', vi: 'Ủy quyền cấp sổ hộ khẩu' },
    desc: { ko: '주민등록 등·초본 발급을 대리인에게 위임할 때 작성합니다.', en: 'To delegate resident register issuance.', zh: '将居民登记誊·抄本发放委托给代理人. ', ja: '住民登録謄・抄本の発行を代理人に委任する時に作成します.', vi: 'Ủy quyền lấy bản sao sổ hộ khẩu.' },
    fee: { ko: '400원', en: '400 KRW', zh: '400 韩元', ja: '400ウォン', vi: '400 KRW' },
    requirements: { 
      ko: '위임장, 위임인 신분증, 수임인 신분증', 
      en: 'POA form, Delegator\'s ID, Representative\'s ID', 
      zh: '委托书, 委托人身份证, 受托人身份证', 
      ja: '委任状, 委任者の身分証明書, 受任者の身分証明書', 
      vi: 'Giấy ủy quyền, Thẻ căn cước người ủy quyền & người nhận' 
    },
  },
  {
    id: 35,
    cat: 'ID_SEAL',
    images: {'ko': '/forms/ko/forms_ko_35_379854.png', 'en': '/forms/en/forms_en_35_0b18f1.png', 'zh': '/forms/cn/forms_cn_35_214062.png', 'ja': '/forms/jp/forms_jp_35_2b8007.png', 'vi': '/forms/vi/forms_vi_35_b426af.png'},
    guideImages: {'en': ['/guides/en/guides_en_35_4850b1.png', '/guides/en/guides_en_35_f7e76c.png', '/guides/en/guides_en_35_fb02e9.png', '/guides/en/guides_en_35_20240c.png', '/guides/en/guides_en_35_ee6405.png'], 'zh': ['/guides/cn/guides_cn_35_1ca946.png'], 'ja': ['/guides/jp/guides_jp_35_c4ea23.png'], 'vi': ['/guides/vi/guides_vi_35_248b5a.png', '/guides/vi/guides_vi_35_c10a8a.png', '/guides/vi/guides_vi_35_c0af04.png', '/guides/vi/guides_vi_35_c03566.png']},
    title: { ko: '주민등록증 발급 신청서', en: 'ID Issuance Application', zh: '居民身份证发放申请', ja: '住民登録証発行申請', vi: 'Đơn xin cấp thẻ căn cước' },
    desc: { ko: '만 17세가 되어 처음 주민등록증을 만들 때 신청합니다.', en: 'Apply for the first ID card at age 17.', zh: '满17岁第一次制作居民身份证时申请. ', ja: '満17歳になり, 初めて住民登録証を作る時に申請します.', vi: 'Làm thẻ căn cước lần đầu khi đủ 17 tuổi.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '사진(3.5x4.5) 1매, 본인 확인', 
      en: '1 Photo (3.5x4.5cm), Identity verification', 
      zh: '照片(3.5x4.5) 1张, 身份确认', 
      ja: '写真(3.5x4.5) 1枚, 本人確認', 
      vi: '1 ảnh (3.5x4.5cm), Xác minh danh tính' 
    },
  },
  {
    id: 36,
    cat: 'ID_SEAL',
    images: {'ko': '/forms/ko/forms_ko_36_b9793f.png', 'en': '/forms/en/forms_en_36_cecf0b.png', 'zh': '/forms/cn/forms_cn_36_8c7634.png', 'ja': '/forms/jp/forms_jp_36_4b018f.png', 'vi': '/forms/vi/forms_vi_36_36d05a.png'},
    guideImages: {'en': ['/guides/en/guides_en_36_b669f4.png', '/guides/en/guides_en_36_92cc72.png', '/guides/en/guides_en_36_bf8e59.png', '/guides/en/guides_en_36_c56587.png'], 'vi': ['/guides/vi/guides_vi_36_5351f9.png', '/guides/vi/guides_vi_36_a28646.png', '/guides/vi/guides_vi_36_acf5cd.png']},
    title: { ko: '주민등록증 재발급 신청서', en: 'ID Re-issuance App', zh: '身份证再发放申请', ja: '住民登録証再発行申請', vi: 'Đơn cấp lại thẻ căn cước' },
    desc: { ko: '분실, 훼손 등으로 주민등록증을 다시 만들 때 신청합니다.', en: 'Apply for ID card re-issuance.', zh: '因丢失、损坏等重新制作居民身份证. ', ja: '紛失, 毀損などで住民登録証を作り直す時に申請します.', vi: 'Đăng ký làm lại thẻ căn cước.' },
    fee: { ko: '5,000원', en: '5,000 KRW', zh: '5,000 韩元', ja: '5,000ウォン', vi: '5,000 KRW' },
    requirements: { 
      ko: '사진(3.5x4.5) 1매, 구 주민등록증(있을 시)', 
      en: '1 Photo (3.5x4.5cm), Old ID card (if available)', 
      zh: '照片(3.5x4.5) 1张, 旧居民身份证(如有)', 
      ja: '写真(3.5x4.5) 1枚, 旧住民登録証(ある場合)', 
      vi: '1 ảnh (3.5x4.5cm), Thẻ cũ (nếu có)' 
    },
  },
  {
    id: 37,
    cat: 'VEHICLE',
    images: {'ko': '/forms/ko/forms_ko_37_1d0958.png', 'en': '/forms/en/forms_en_37_7bd1bf.png', 'zh': '/forms/cn/forms_cn_37_0bf15c.png', 'ja': '/forms/jp/forms_jp_37_914a52.png', 'vi': '/forms/vi/forms_vi_37_db2a1c.png'},
    guideImages: {'en': ['/guides/en/guides_en_37_95908d.png', '/guides/en/guides_en_37_dc85af.png'], 'vi': ['/guides/vi/guides_vi_37_2e5e0d.png', '/guides/vi/guides_vi_37_584fee.png']},
    title: { ko: '이륜자동차사용신고서', en: 'Motorcycle Registration', zh: '二轮汽车使用申报', ja: '二輪自動車使用届', vi: 'Báo cáo sử dụng xe máy' },
    desc: { ko: '오토바이를 새로 구입하여 신고할 때 제출합니다.', en: 'Submitted to register a new motorcycle.', zh: '新购买摩托车进行使用申报. ', ja: 'バイクを新しく購入して使用届を出す時に提出します.', vi: 'Đăng ký sử dụng xe máy mới.' },
    fee: { ko: '비용 발생 (취득세 등)', en: 'Costs incurred (Taxes, etc.)', zh: '产生费用 (购置税等)', ja: '費用発生 (取得税など)', vi: 'Phát sinh chi phí (Thuế...)' },
    requirements: { 
      ko: '이륜차 제작증, 보험가입증명서, 신분증', 
      en: 'Manufacturing cert, Proof of insurance, ID Card', 
      zh: '二轮车制作证, 保险加入证明书, 身份证', 
      ja: '二輪車製作証, 保険加入証明書, 身分証明書', 
      vi: 'Giấy chứng nhận sản xuất, Bảo hiểm, Thẻ căn cước' 
    },
  },
  {
    id: 38,
    cat: 'VEHICLE',
    images: {'ko': '/forms/ko/forms_ko_38_895521.png', 'en': '/forms/en/forms_en_38_c7435b.png', 'zh': '/forms/cn/forms_cn_38_b8d9ea.png', 'ja': '/forms/jp/forms_jp_38_62a7a8.png', 'vi': '/forms/vi/forms_vi_38_3ab23b.png'},
    guideImages: {'en': ['/guides/en/guides_en_38_cf8512.png', '/guides/en/guides_en_38_a3c170.png'], 'vi': ['/guides/vi/guides_vi_38_a356d2.png']},
    title: { ko: '이륜자동차사용폐지신고서', en: 'Motorcycle Disuse Report', zh: '二轮汽车废止申报', ja: '二輪自動車使用廃止届', vi: 'Hủy sử dụng xe máy' },
    desc: { ko: '오토바이 사용을 중단하거나 폐기할 때 신고합니다.', en: 'Report stopping or scrapping a motorcycle.', zh: '停止使用或报废摩托车时申报. ', ja: 'バイクの使用を中断したり廃棄したりする時に届け出ます.', vi: 'Báo cáo hủy sử dụng xe máy.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '사용신고필증, 번호판 반납, 신분증', 
      en: 'Registration certificate, License plate, ID Card', 
      zh: '使用申报证明, 退还车牌, 身份证', 
      ja: '使用届出済証, ナンバープレート返納, 身分証明書', 
      vi: 'Giấy đăng ký, Trả biển số, Thẻ căn cước' 
    },
  },
  {
    id: 39,
    cat: 'VEHICLE',
    images: {'ko': '/forms/ko/forms_ko_39_e0c0fc.png', 'en': '/forms/en/forms_en_39_6fc89d.png', 'zh': '/forms/cn/forms_cn_39_524886.png', 'ja': '/forms/jp/forms_jp_39_7aff7c.png', 'vi': '/forms/vi/forms_vi_39_5d5b25.png'},
    guideImages: {'en': ['/guides/en/guides_en_39_8b3e62.png', '/guides/en/guides_en_39_881c44.png'], 'vi': ['/guides/vi/guides_vi_39_ac435b.png', '/guides/vi/guides_vi_39_85e6a7.png']},
    title: { ko: '이륜자동차변경신청서', en: 'Motorcycle Change App', zh: '二轮汽车变更申请', ja: '二輪自動車変更申請', vi: 'Thay đổi báo cáo xe máy' },
    desc: { ko: '오토바이 소유자 정보 등 변경 사항이 있을 때 신청합니다.', en: 'Apply when there are changes in owner info.', zh: '摩托车所有者地址等有变更事项. ', ja: 'バイクの所有者の住所など変更がある時に申請します.', vi: 'Thay đổi thông tin báo cáo xe máy.' },
    fee: { ko: '무료', en: 'Free', zh: '免费', ja: '無料', vi: 'Miễn phí' },
    requirements: { 
      ko: '사용신고필증, 변경 증빙서류, 신분증', 
      en: 'Registration certificate, Proof of change, ID Card', 
      zh: '使用申报证明, 变更证明材料, 身份证', 
      ja: '使用届出済証, 変更の証拠書類, 身分証明書', 
      vi: 'Giấy đăng ký, Giấy tờ chứng minh thay đổi, Thẻ căn cước' 
    },
  },
  {
    id: 40,
    cat: 'VEHICLE',
    images: {'ko': '/forms/ko/forms_ko_40_ae4357.png', 'en': '/forms/en/forms_en_40_80ce8c.png', 'zh': '/forms/cn/forms_cn_40_b2f6a7.png', 'ja': '/forms/jp/forms_jp_40_a60b3c.png', 'vi': '/forms/vi/forms_vi_40_bfb3cc.png'},
    guideImages: {'en': ['/guides/en/guides_en_40_6d0377.png', '/guides/en/guides_en_40_a1ca4b.png'], 'vi': ['/guides/vi/guides_vi_40_b35449.png', '/guides/vi/guides_vi_40_a7a20e.png']},
    title: { ko: '자동차양도증명서', en: 'Vehicle Transfer', zh: '汽车让渡证明', ja: '自動車譲渡証明', vi: 'Chuyển nhượng xe' },
    desc: { ko: '차량을 팔거나 넘길 때 작성하는 계약 서류입니다.', en: 'A contract for selling or transferring a vehicle.', zh: '转让车辆时填写的合同. ', ja: '車両を売ったり譲ったりする時に作成する書類です.', vi: 'Hợp đồng chuyển nhượng xe.' },
    fee: { ko: '비용 발생', en: 'Costs incurred', zh: '产生费用', ja: '費用発生', vi: 'Phát sinh chi phí' },
    requirements: { 
      ko: '양도인/양수인 신분증, 자동차등록증', 
      en: 'Seller/Buyer ID Cards, Vehicle registration', 
      zh: '让渡人/受让人身份证, 汽车登记证', 
      ja: '譲渡人/譲受人の身分証明書, 自動車登録証', 
      vi: 'Thẻ căn cước bên bán/mua, Giấy đăng ký xe' 
    },
  },
  {
    id: 41,
    cat: 'VEHICLE',
    images: {'ko': '/forms/ko/forms_ko_41_d37857.png', 'en': '/forms/en/forms_en_41_d06295.png', 'zh': '/forms/cn/forms_cn_41_b5b436.png', 'ja': '/forms/jp/forms_jp_41_4fa0ec.png', 'vi': '/forms/vi/forms_vi_41_0515a3.png'},
    guideImages: {'en': ['/guides/en/guides_en_41_ef4147.png'], 'vi': ['/guides/vi/guides_vi_41_30dd53.png']},
    title: { ko: '이륜자동차증서 재교부신청서', en: 'Motorcycle Cert Re-issuance', zh: '二轮汽车证件再交付', ja: '二輪自動車証書再交付', vi: 'Cấp lại giấy xe máy' },
    desc: { ko: '오토바이 사용신고필증을 잃어버렸을 때 사용합니다.', en: 'Used to re-issue lost registration certificate.', zh: '丢失摩托车证件重新领取. ', ja: 'バイクの証書を紛失して再発行してもらう時に使用します.', vi: 'Cấp lại giấy chứng nhận xe máy.' },
    fee: { ko: '700원', en: '700 KRW', zh: '700 韩元', ja: '700ウォン', vi: '700 KRW' },
    requirements: { 
      ko: '본인 신분증, 분실 사유서', 
      en: 'Your ID Card, Statement of loss', 
      zh: '本人身份证, 丢失理由书', 
      ja: '本人の身分証明書, 紛失理由書', 
      vi: 'Thẻ căn cước, Đơn trình báo mất' 
    },
  },
];