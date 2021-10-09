---
id: learn-consensus
title: Polkadot Consensus
sidebar_label: Polkadot Consensus
description: An explanation of the consensus model used in Polkadot.
slug: ../learn-consensus
---

## Tại sao chúng ta cần Đồng thuận?

Đồng thuận là một phương pháp để đi đến thống nhất về một trạng thái được chia sẻ. Để trạng thái của
blockchain tiếp tục xây dựng và tiến lên phía trước, tất cả các nút trong mạng phải đồng ý và đi đến
đồng thuận. Đó là cách mà các nút trong một mạng phi tập trung có thể luôn được đồng bộ hóa với
nhau. Nếu không có sự đồng thuận cho mạng lưới phi tập trung của các nút trong một blockchain, không
có cách nào để đảm bảo rằng trạng thái mà một nút tin là đúng sẽ được chia sẻ bởi các nút khác. Sự
đồng thuận nhằm cung cấp cái nhìn khách quan về trạng thái giữa những người tham gia, mỗi người đều
có quan điểm chủ quan của riêng mình về mạng lưới. Đó là quá trình mà các nút này giao tiếp và đi
đến thống nhất, đồng thời có thể xây dựng các khối mới.

## PoW và PoS là gì?

Proof of Work (PoW) và Proof of Stake (PoS) đã được sử dụng không chính xác như cách viết ngắn gọn
để chỉ các cơ chế đồng thuận của các blockchain, nhưng điều đó không thể hiện được bức tranh đầy đủ.
PoW là phương pháp để thống nhất về tác giả khối và một phần của sự đồng thuận đầy đủ hơn của
[Nakamoto consensus](#nakamoto-consensus) cũng bao gồm thuật toán lựa chọn chuỗi (quy tắc chuỗi dài
nhất trong Bitcoin). Tương tự, PoS là một tập hợp các quy tắc để chọn bộ trình xác thực và không chỉ
định quy tắc chọn chuỗi hoặc cách một chuỗi có thể đạt được tính cuối cùng. Các thuật toán PoS theo
truyền thống được ghép nối với một thuật toán để đạt được thỏa thuận Byzantine giữa các nút. Ví dụ:
[Tendermint](learn-comparisons-cosmos.md) là một thuật toán chịu lỗi Byzantine thực tế sử dụng PoS
làm phương pháp lựa chọn bộ xác nhận của nó.

## Tại sao không phải là Proof of Work?

Mặc dù đơn giản và hiệu quả trong việc đạt được sự đồng thuận phi tập trung về nhà sản xuất khối
tiếp theo, bằng chứng công việc với sự đồng thuận của Nakamoto tiêu thụ một lượng năng lượng đáng
kinh ngạc, không có tính kinh tế hoặc tính cuối cùng có thể chứng minh được và không có chiến lược
hiệu quả trong việc chống lại thỏa thuận cạnh tranh.

## Bằng chứng cổ phần được đề cử (Nominated Proof of Stake)

Trong các hệ thống PoS truyền thống, sự tham gia sản xuất khối phụ thuộc vào việc nắm giữ mã thông
báo thay vì sức mạnh tính toán. Trong khi các nhà phát triển PoS thường có người đề xuất tham gia
bình đẳng theo cách phi tập trung, hầu hết các dự án cuối cùng lại đề xuất một số cấp độ hoạt động
tập trung, trong đó số lượng người xác nhận có đầy đủ quyền tham gia bị hạn chế. Những người xác
nhận này thường được coi là những người giàu có nhất và do đó, ảnh hưởng đến mạng PoS vì họ là những
người được đặt cược nhiều nhất. Thông thường, số lượng các ứng cử viên để duy trì mạng lưới với kiến
​​thức (và thiết bị) cần thiết bị hạn chế; điều này cũng có thể trực tiếp làm tăng chi phí hoạt
động. Các hệ thống có một số lượng lớn trình xác thực có xu hướng hình thành các nhóm để giảm sự
khác biệt về doanh thu và lợi nhuận của họ từ tính kinh tế theo quy mô. Các nhóm này thường nằm
ngoài chuỗi.

Một cách để giảm bớt điều này là thực hiện hình thành nhóm trên chuỗi và cho phép chủ sở hữu mã
thông báo bỏ phiếu [với cổ phần của họ] cho người xác nhận đại diện cho họ.

Polkadot sử dụng NPoS (Bằng chứng cổ phần được đề cử) làm cơ chế để chọn bộ xác thực. Nó được thiết
kế với vai trò của **người xác nhận** và **người đề cử**, để tối đa hóa tính bảo mật của chuỗi. Các
tác nhân quan tâm đến việc duy trì mạng có thể chạy một nút xác nhận.

Trình xác thực đảm nhận vai trò sản xuất các khối mới trong [BABE](learn-consensus.md/#babe), xác
thực các khối parachain và đảm bảo tính cuối cùng. Những người được đề cử có thể chọn ủng hộ những
người xác nhận đã chọn với số tiền đặt cọc của họ. Những người được đề cử có thể phê duyệt các ứng
cử viên mà họ tin tưởng và hỗ trợ họ bằng mã thông báo của họ.

## Probabilistic vs. Provable Finality

Một blockchain đồng thuận Nakamoto thuần túy chạy PoW chỉ có thể đạt được khái niệm về tính xác suất
cuối cùng và đạt được sự đồng thuận cuối cùng. Tính xác suất cuối cùng có nghĩa là theo một số giả
định về mạng và những người tham gia, nếu chúng ta thấy một vài khối xây dựng trên một khối nhất
định, chúng ta có thể ước tính xác suất rằng nó là cuối cùng. Đồng thuận cuối cùng có nghĩa là vào
một thời điểm nào đó trong tương lai, tất cả các nút sẽ đồng ý về tính trung thực của một tập dữ
liệu. Sự đồng thuận cuối cùng này có thể mất nhiều thời gian và không thể xác định trước thời hạn là
bao lâu. Tuy nhiên, các tiện ích cuối cùng như GRANDPA (Thỏa thuận tiền tố tạo ra tổ tiên đệ quy dựa
trên GHOST) hoặc Casper FFG của Ethereum (Tiện ích cuối cùng thân thiện) được thiết kế để đảm bảo
mạnh mẽ hơn và nhanh hơn về tính cuối cùng của các khối - cụ thể là chúng không bao giờ có thể được
hoàn nguyên sau một số quá trình thỏa thuận Byzantine đã diễn ra. Khái niệm về sự đồng thuận không
thể đảo ngược được gọi là tính cuối cùng có thể chứng minh được.

Trong bài báo [GRANDPA](https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf), nó được diễn
đạt theo cách sau:

> Chúng ta nói rằng oracle A rong một giao thức cuối cùng nhất quán nếu nó trả về cùng một giá trị
> cho tất cả những người tham gia sau một thời gian không xác định.

## Đồng thuận kết hợp

Có hai giao thức chúng tôi sử dụng khi nói về giao thức đồng thuận của Polkadot, GRANDPA và BABE
(Blind Assignment for Blockchain Extension). Chúng tôi nói về cả hai điều này bởi vì Polkadot sử
dụng cái được gọi là sự đồng thuận kết hợp. Sự đồng thuận kết hợp tách tiện ích cuối cùng ra khỏi cơ
chế sản xuất khối.

Đây là một cách để nhận được lợi ích của tính cuối cùng theo xác suất (khả năng luôn tạo ra các khối
mới) và tính cuối cùng có thể chứng minh được (có một thỏa thuận chung về chuỗi chuẩn không có cơ
hội đảo ngược) trong Polkadot. Nó cũng tránh những nhược điểm tương ứng của từng cơ chế (khả năng vô
tình đi theo ngã ba sai trong tính xác suất cuối cùng và cơ hội "đình trệ" - không thể tạo ra các
khối mới - ở mức cuối cùng có thể chứng minh được). Bằng cách kết hợp hai cơ chế này, Polkadot cho
phép các khối được sản xuất nhanh chóng và cơ chế hoàn thiện chậm hơn chạy trong một quy trình riêng
biệt để hoàn thiện các khối mà không có nguy cơ bị đình trệ hoặc xử lý giao dịch chậm hơn.

Sự đồng thuận kết hợp đã được đề xuất trong quá khứ. Đáng chú ý, nó đã được đề xuất (hiện đã không
còn tồn tại) như một bước trong quá trình chuyển đổi của Ethereum sang bằng chứng cổ phần trong
[EIP 1011](http://eips.ethereum.org/EIPS/eip-1011), chỉ định [Casper FFG](#casper-ffg).

## Sản xuất khối: BABE

BABE (Blind Assignment for Blockchain Extension) là cơ chế sản xuất khối chạy giữa các nút xác nhận
và xác định tác giả của các khối mới. BABE có thể so sánh như một thuật toán với Ouroboros Praos,
với một số khác biệt chính trong quy tắc lựa chọn chuỗi và điều chỉnh thời gian vị trí. BABE chỉ
định các vị trí sản xuất khối cho người xác thực theo số tiền đặt cọc và sử dụng chu kỳ ngẫu nhiên
([randomness cycle](learn-randomness.md)) Polkadot.

Người xác nhận ở Polkadot sẽ tham gia xổ số ở mọi vị trí để cho họ biết liệu họ có phải là ứng cử
viên sản xuất khối cho vị trí đó hay không. Slot là đơn vị thời gian rời rạc, có độ dài trên danh
nghĩa là 6 giây. Do cơ chế ngẫu nhiên này, nhiều trình xác nhận có thể là ứng cử viên cho cùng một
vị trí. Những lần khác, một vị trí có thể trống, dẫn đến thời gian khối không nhất quán.

### Nhiều trình xác thực cho mỗi Slot

Khi nhiều trình xác nhận là ứng cử viên của nhà sản xuất khối trong một vị trí nhất định, tất cả sẽ
tạo ra một khối và phát nó lên mạng. Tại thời điểm đó, đó là một cuộc đua. Trình xác thực có khối
tiếp cận hầu hết mạng trước tiên sẽ thắng. Tùy thuộc vào cấu trúc liên kết mạng và độ trễ, cả hai
chuỗi sẽ tiếp tục xây dựng ở một số dung lượng, cho đến khi quá trình hoàn thiện bắt đầu và cắt bỏ
một nhánh. Xem Fork Choice bên dưới để biết cách hoạt động.

### Không có trình xác thực nào trong Slot

Khi không có trình xác thực nào đạt đủ thấp trong xổ số ngẫu nhiên để đủ điều kiện sản xuất khối,
thì một vị trí có thể vẫn dường như không có khối. Chúng tôi tránh điều này bằng cách chạy thuật
toán lựa chọn trình xác thực kiểu vòng tròn thứ cấp trong background. Trình xác thực được chọn để
tạo ra các khối thông qua thuật toán này luôn tạo ra các khối, nhưng các khối thứ cấp này sẽ bị bỏ
qua nếu cùng một vị trí cũng tạo ra một khối chính từ trình xác thực do
[VRF-selected](learn-randomness.md). Do đó, một vị trí có thể có một khối chính hoặc một khối phụ và
không có vị trí nào bị bỏ qua.

Để biết thêm chi tiết về BABE, vui lòng xem tài liệu
[BABE paper](https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html).

### BADASS BABE: SASSAFRAS

SASSAFRAS (Phân vùng bán ẩn danh của người được phân công cố định để phân công vị trí theo nhịp thời
gian cố định) (hay còn gọi là SASSY BABE hoặc BADASS BABE), là một phần mở rộng của BABE và hoạt
động như một giao thức sản xuất khối thời gian không đổi. Cách tiếp cận này cố gắng giải quyết những
thiếu sót của BABE bằng cách đảm bảo rằng chính xác một khối được tạo ra với khoảng thời gian không
đổi. Giao thức sử dụng zk-SNARK để xây dựng một vòng VRF và đang trong quá trình thực hiện. Phần này
sẽ được cập nhật khi tiến trình tiếp theo.

## Tiện ích cuối cùng: GRANDPA

GRANDPA (Thỏa thuận tiền tố truy xuất tổ tiên dựa trên GHOST) là tiện ích cuối cùng được triển khai
cho Polkadot Relay chain.

Nó hoạt động trong mô hình mạng đồng bộ một phần miễn là 2/3 số nút là trung thực và có thể đối phó
với 1/5 nút Byzantine trong cài đặt không đồng bộ.

Một điểm khác biệt đáng chú ý là GRANDPA đạt được các thỏa thuận trên chuỗi chứ không phải theo
khối, giúp tăng tốc đáng kể quá trình hoàn thiện, ngay cả sau khi phân vùng mạng trong thời gian dài
hoặc các lỗi mạng khác.

Nói cách khác, ngay sau khi hơn 2/3 trình xác nhận chứng thực chuỗi chứa một khối nhất định, tất cả
các khối dẫn đến khối đó sẽ được hoàn thiện cùng một lúc.

### Giao thức

Vui lòng tham khảo tài liệu
[the GRANDPA paper](https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf) để biết mô tả đầy
đủ về giao thức.

### Thực hiện

[Substrate implementation of GRANDPA](https://github.com/paritytech/substrate/blob/master/frame/grandpa/src/lib.rs)
là một phần của Substrate Frame.

## Fork Choice

Kết hợp BABE và GRANDPA lại với nhau, sự lựa chọn fork của Polkadot trở nên rõ ràng. BABE phải luôn
xây dựng trên chuỗi đã được GRANDPA hoàn thiện. Khi có các nhánh sau phần đầu cuối cùng, BABE cung
cấp tính xác suất cuối cùng bằng cách xây dựng trên chuỗi với các khối chính nhất.

![Best chain choice](../assets/best_chain.png)

Trong hình trên, các khối màu đen được hoàn thiện, còn các khối màu vàng thì không. Các khối được
đánh dấu bằng "1" là các khối chính; những khối được đánh dấu "2" là khối phụ. Mặc dù chuỗi trên
cùng là chuỗi dài nhất trong khối hoàn thiện mới nhất, nhưng nó không đủ điều kiện vì nó có ít phần
mềm sơ bộ hơn tại thời điểm đánh giá so với chuỗi bên dưới nó.

# So sánh

## Đồng thuận Nakamoto

Sự đồng thuận của Nakamoto bao gồm quy tắc chuỗi dài nhất sử dụng bằng chứng công việc làm cơ chế
phản kháng tổng hợp và bầu cử lãnh đạo.

Sự đồng thuận của Nakamoto chỉ mang lại cho chúng ta tính xác thực cuối cùng. Tính cuối cùng theo
xác suất nói rằng một khối trong quá khứ chỉ an toàn bằng số lượng xác nhận mà nó có, hoặc số khối
đã được xây dựng trên nó. Khi nhiều khối hơn được xây dựng trên đầu một khối cụ thể trong chuỗi
Proof of Work, nhiều công việc tính toán hơn đã được thực hiện đằng sau chuỗi cụ thể này. Tuy nhiên,
nó không đảm bảo rằng chuỗi chứa khối sẽ luôn là chuỗi đã thỏa thuận, vì một tác nhân có nguồn lực
không giới hạn có thể xây dựng một chuỗi cạnh tranh và sử dụng đủ tài nguyên tính toán để tạo chuỗi
không chứa một khối cụ thể. Trong tình huống như vậy, quy tắc chuỗi dài nhất được sử dụng trong
Bitcoin và các chuỗi bằng chứng công việc khác sẽ chuyển sang chuỗi mới này như một quy tắc chuẩn.

## PBFT / Tendermint

Vui lòng xem [relevant section](learn-comparisons-cosmos.md#consensus) trong bài viết so sánh
Cosmos.

## Casper FFG

Hai điểm khác biệt chính giữa GRANDPA và Casper FFG là:

- trong GRANDPA, các cử tri khác nhau có thể bỏ phiếu đồng thời cho các khối ở các độ cao khác nhau
- GRANDPA chỉ phụ thuộc vào các khối đã hoàn thiện để ảnh hưởng đến quy tắc lựa chọn rẽ nhánh của cơ
  chế sản xuất khối cơ bản

# Resources

- [BABE paper](https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html) - Mô
  tả học thuật của giao thức BABE.
- [GRANDPA paper](https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf) - Mô tả học thuật
  của tiện ích kết thúc GRANDPA. Chứa các bằng chứng chính thức của thuật toán.
- [Rust implementation](https://github.com/paritytech/finality-grandpa) - Triển khai tham chiếu và
  [Substrate pallet](https://github.com/paritytech/substrate/blob/master/frame/grandpa/src/lib.rs)
  kèm theo.
- [Block Production and Finalization in Polkadot](https://www.crowdcast.io/e/polkadot-block-production) -
  Giải thích về cách BABE và GRANDPA làm việc cùng nhau để sản xuất và hoàn thiện khối trên Kusama,
  với Bill Laboon.
- [Block Production and Finalization in Polkadot: Understanding the BABE and GRANDPA Protocols](https://www.youtube.com/watch?v=1CuTSluL7v4&t=4s) -
  Tìm hiểu các giao thức BABE và GRANDPA - Bài nói chuyện học thuật của Bill Laboon, được đưa ra tại
  MIT Cryptoeconomic Systems 2020, mô tả sâu về mô hình đồng thuận kết hợp của Polkadot.
