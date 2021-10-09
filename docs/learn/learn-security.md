---
id: learn-security
title: Security of the network
sidebar_label: Security of the network
description: Learn about pooled security and how it is maintained.
slug: ../learn-security
---

## Bảo mật được chia sẻ

Bảo mật chia sẻ, đôi khi được gọi trong tài liệu là bảo mật tổng hợp, là một trong những đề xuất giá
trị duy nhất cho các chuỗi đang cân nhắc trở thành [parachain](learn-parachains.md) và tham gia mạng
Polkadot. Ở cấp độ cao, bảo mật được chia sẻ có nghĩa là tất cả các parachains được kết nối với
Polkadot Relay Chain bằng cách cho thuê một slot parachain sẽ được hưởng lợi từ sự an toàn kinh tế
được cung cấp bởi các trình xác thực ([validators](learn-validator.md)) Relay Chain.

Khái niệm về bảo mật được chia sẻ khác với các giao thức interchain xây dựng dựa trên kiến ​​trúc
của các cây cầu. Đối với các giao thức cầu nối, mỗi chuỗi được coi là có chủ quyền và phải duy trì
bộ xác nhận và an ninh kinh tế của riêng nó. Một mối quan tâm trong các giao thức này là về khả năng
mở rộng của bảo mật. Ví dụ: một gợi ý để mở rộng quy mô blockchain là mở rộng quy mô theo các
altcoin, điều này cho thấy rằng khối lượng giao dịch sẽ lọc xuống các altcoin có vốn hóa thị trường
thấp hơn khi các altcoin lớn hơn lấp đầy các khối của chúng. Một lỗ hổng lớn trong ý tưởng này là
các đồng tiền vốn hóa thị trường thấp hơn sẽ có ít an toàn kinh tế hơn và dễ bị tấn công hơn. Một ví
dụ thực tế về cuộc tấn công 51% đã xảy ra gần đây
([Ethereum Classic attack on January 10](https://cointelegraph.com/news/ethereum-classic-51-attack-the-reality-of-proof-of-work)),
trong đó một kẻ tấn công không xác định đã chi 219_500 ETC (~ 1,1 triệu USD). Tiếp theo là hai cuộc
tấn công 51% nữa vào ETC.

Polkadot khắc phục những lo ngại về khả năng mở rộng bảo mật vì nó thu hút tất cả các động lực kinh
tế cho Relay chain và cho phép các parachains tận dụng các đảm bảo mạnh mẽ hơn ngay từ đầu. Các
chuỗi chủ quyền phải dành nhiều nỗ lực hơn nữa để tăng giá trị của đồng tiền của họ để nó không dễ
dàng bị tấn công bởi những kẻ tấn công được tài trợ tốt.

### Ví dụ

Hãy so sánh mô hình bảo mật có chủ quyền tiêu chuẩn tồn tại trên các chuỗi bằng chứng công việc
(PoW) hiện tại với mô hình bảo mật được chia sẻ của Polkadot. Các chuỗi được bảo mật bằng mô hình
bảo mật của riêng họ như Bitcoin, Zcash, Ethereum và các dẫn xuất của chúng, tất cả đều phải khởi
động mạng lưới thợ đào độc lập của riêng họ và duy trì một phần cạnh tranh của sức mạnh băm trung
thực. Vì khai thác đang trở thành một ngành công nghiệp lớn hơn ngày càng tập trung vào những người
chơi chính, việc một tác nhân duy nhất có thể kiểm soát đủ sức mạnh băm để tấn công một chuỗi ngày
càng trở nên thực tế hơn.

Điều này có nghĩa là các chuỗi nhỏ hơn không thể duy trì lượng băm an toàn trên mạng của họ có thể
có khả năng bị tấn công bởi một nhóm khai thác lớn với ý thích đơn giản là chuyển hướng sức mạnh băm
của nó khỏi Bitcoin và sang một chuỗi mới và kém an toàn hơn.
[Các cuộc tấn công 51% có thể xảy ra ngày nay](https://www.crypto51.app) với các cuộc tấn công đã
được báo cáo trên Ethereum Classic (xem ở trên),
[Verge](https://coincentral.com/verge-suffers-51-attack-hard-forks-in-response/),
[Bitcoin Gold](https://bitcoingold.org/responding-to-attacks/), và các loại tiền điện tử khác.

Trên Polkadot, sự chênh lệch này giữa bảo mật chuỗi sẽ không có. Khi một parachain kết nối với
Polkadot, bộ xác thực Relay sẽ trở thành bộ bảo mật cho quá trình chuyển đổi trạng thái của
parachain đó. Parachain sẽ chỉ có nhu cầu chạy một vài nút đối chiếu để giữ cho trình xác thực được
thông báo với các chuyển đổi trạng thái mới nhất và bằng chứng / nhân chứng. Sau đó, trình xác thực
sẽ kiểm tra các parachains mà chúng được chỉ định. Bằng cách này, các parachains mới ngay lập tức
được hưởng lợi từ tính bảo mật tổng thể của Polkadot ngay cả khi chúng vừa được khởi chạy.

## FAQ

### Bảo mật có tương quan với số lượng trình xác thực không? Còn số lượng parachains thì sao?

Bảo mật không phụ thuộc vào số lượng parachains được kết nối với Polkadot Relay Chain. Mối tương
quan giữa bảo mật và số lượng trình xác thực tồn tại vì số lượng trình xác thực cao hơn sẽ cung cấp
cho mạng các thuộc tính phân quyền mạnh hơn và khiến việc cố gắng gỡ bỏ khó khăn hơn. Tuy nhiên, chỉ
số lớn nhất về tính bảo mật của mạng là tín hiệu kinh tế của số lượng DOT được liên kết và đặt cọc.
Số lượng DOT được đặt bởi người xác nhận (validator) và người đề cử (nominators) trung thực càng
lớn, thì số lượng DOT tối thiểu mà kẻ tấn công cần để có được vị trí xác thực càng cao.

### Các parachains có bao giờ cần bảo mật của riêng họ không? Trong những trường hợp nào thì parachains cần bảo mật riêng?

Hầu hết các parachains sẽ không cần phải lo lắng về bảo mật của chính họ, vì tất cả các chuyển đổi
trạng thái sẽ được bảo mật bởi bộ xác thực Polkadot Relay Chain. Tuy nhiên, trong một số trường hợp
(được coi là thử nghiệm hơn), parachains có thể yêu cầu bảo mật riêng của chúng. Nói chung, những
trường hợp này sẽ xoay quanh việc thiếu dữ liệu có sẵn cho trình xác thực Relay chain.

Một ví dụ là nếu chức năng chuyển đổi trạng thái là một số bằng chứng ngắn gọn hoặc không có kiến
thức, parachain sẽ chịu trách nhiệm giữ cho dữ liệu của nó có sẵn vì Relay chain sẽ không có nó.
Ngoài ra, đối với các chuỗi có sự đồng thuận của riêng họ, chẳng hạn như chuỗi cho phép thanh toán
nhanh trên [Blink Network](https://www.youtube.com/watch?v=sf5GMDlG7Uk), có lẽ sẽ cần phải có một
thỏa thuận Byzantine giữa các nhà phân phối trước khi khối parachain có hiệu lực. Thỏa thuận sẽ là
cần thiết vì dữ liệu liên quan đến sự đồng thuận nhanh chóng sẽ không được xác nhận đối với người
xác nhận Relay chain.
