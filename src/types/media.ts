export type Channel = 'google' | 'naver' | 'facebook' | 'kakao';

export type Meida = {
	channel: Channel;
	date: string;
	imp: number;
	click: number;
	cost: number;
	convValue: number;
	ctr: number;
	cvr: number;
	cpc: number;
	cpa: number;
	roas: number;
};

/**
 * channel: 홍보 채널
 * date: 해당 일자
 * imp : 노출수
 * click : 클릭수
 * cost : 비용
 * convValue : 전환가치
 * ctr : 클릭률
 * cvr : 전환률(구매 전환률)
 * cpc : 클릭당 비용
 * cpa : 참여당 비용
 * roas : 광고수익률
 */
