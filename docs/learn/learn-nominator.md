---
id: learn-nominator
title: Nominator
sidebar_label: Nominator
description: Learn about what it means to be a nominator.
slug: ../learn-nominator
---

Những người được đề cử bảo vệ Relay chain bằng cách chọn những người xác nhận tốt và đặt DOT.

Bạn có thể có một tài khoản với DOT và muốn kiếm DOT mới. Bạn có thể làm như vậy với tư cách là trình xác nhận(validator), yêu cầu một nút hoạt động 24/7. Nếu bạn không có nút như vậy hoặc không muốn làm phiền, bạn vẫn có thể kiếm được DOT bằng cách đề cử một hoặc nhiều trình xác nhận.

Bằng cách đó, bạn trở thành người đề cử cho (các) người xác nhận mà bạn lựa chọn. Chọn người xác nhận của bạn một cách cẩn thận - nếu họ không cư xử đúng, họ sẽ bị chém và bạn cũng sẽ mất DOT. Tuy nhiên, nếu họ tuân theo các quy tắc của mạng, thì bạn có thể chia sẻ phần thưởng đặt cược mà họ tạo ra.

Trong khi DOT của bạn được đặt cược bằng cách chỉ định người xác nhận, chúng bị 'khóa' (ngoại quan). Bạn có thể nhận DOT mới trong tài khoản của mình nhưng bạn không thể đặt cược với tư cách là người xác thực hoặc chuyển DOT khỏi tài khoản của mình. Bạn có thể hủy đề cử bất kỳ lúc nào ([un-nominate at any time](../maintain/maintain-guides-how-to-unbond.md)) để ngừng ký quỹ của mình. Hãy nhớ rằng việc bỏ đề cử sẽ có hiệu lực trong kỷ nguyên tiếp theo và việc hủy đề cử không tự động hủy bỏ các khoản tiền của bạn. Có khoảng thời gian không ràng buộc là 7 ngày trên Kusama và 28 ngày trên Polkadot trước khi tiền ngoại quan có thể được chuyển sau khi phát hành một giao dịch hủy ràng buộc.

### Active vs. Inactive Nomination

Khi bạn chuyển đến phần [Account actions](https://polkadot.js.org/apps/#/staking/actions) trong trang đặt cược, bạn sẽ thấy các tài khoản ngoại quan và trạng thái đề cử của mình. Nếu không, bạn có thể làm theo 
[hướng dẫn này](../maintain/maintain-guides-how-to-nominate-polkadot.md) để cấu hình nó trước. Các đề cử của bạn sẽ có hiệu lực trong thời đại tiếp theo; kỷ nguyên là khoảng 6 giờ trên Kusama và 24 giờ trên Polkadot.

![Nominations](../assets/staking/polkadotjs_nominator_account.png)

Giả sử bạn đã đề cử năm ứng cử viên trình xác thực và ba trong số năm ứng cử viên được bầu vào nhóm trình xác thực đang hoạt động, thì bạn sẽ thấy hai trong số các đề cử của mình là "đang chờ", và rất có thể một là "đang hoạt động" và phần còn lại là "không hoạt động". Đề cử đang hoạt động hoặc không hoạt động có nghĩa là những người xác nhận được đề cử của bạn đã được bầu vào nhóm xác nhận, trong khi chờ đợi có nghĩa là họ đã không được bầu. Nói chung, bạn sẽ chỉ có một người xác nhận duy nhất có một đề cử đang hoạt động, có nghĩa là bạn đang trực tiếp hỗ trợ nó với số tiền đặt cược của bạn trong thời đại này và do đó có khả năng nhận được phần thưởng đặt cược. Những người được đề cử không hoạt động là những người xác nhận đã được bầu chọn cho thời đại này nhưng bạn không tích cực ủng hộ. Mỗi thời đại, một cuộc bầu cử mới sẽ diễn ra và bạn có thể được chỉ định một đề cử đang hoạt động khác trong số những người xác nhận mà bạn đã chọn.

Nếu bạn đang cam kết một số tiền cổ phần rất lớn, thì bạn có thể có nhiều hơn một đề cử đang hoạt động. Tuy nhiên, thuật toán bầu cử cố gắng giảm thiểu tình huống này và nó sẽ không xảy ra thường xuyên, vì vậy bạn hầu như luôn chỉ thấy một đề cử đang hoạt động duy nhất cho mỗi thời đại. Xem phần
[section on Phragmén optimization](learn-phragmen.md#optimizations) để biết thêm chi tiết.

### Số cổ phần tối thiểu bắt buộc

Do cách [Phragmen algorithm](learn-phragmen.md) tạo tập giải pháp và do thực tế là tập giải pháp phải nằm trong một khối duy nhất, trong một số thời đại, số lượng DOT tối thiểu sẽ được đề cử để nhận phần thưởng đặt cược.

Tham số này có thể được cập nhật thông qua quản trị trên chuỗi và có thể tìm thấy phiên bản mới nhất và cập nhật nhất trên [chain state](https://polkadot.js.org/apps/#/chainstate) (select **state query >
staking > minimumNominatorBond**)

### Oversubscribed Validators

Người xác thực chỉ có thể trả tiền cho một số người được đề cử nhất định cho mỗi thời đại. Điều này hiện được đặt thành {{polkadot_max_nominators}}, nhưng có thể được sửa đổi thông qua quản trị. Nếu có hơn {{polkadot_max_nominators}} người đề cử đề cử cùng một trình xác thực, thì đó là "người đăng ký quá mức" và chỉ {{polkadot_max_nominators}} người đề cử hàng đầu (xếp hạng theo số tiền đặt cược) mới được trả thưởng. Những người được đề cử khác sẽ không nhận được phần thưởng cho thời đại đó, mặc dù tiền đặt cược của họ vẫn sẽ được sử dụng để tính toán việc tham gia vào tập hợp trình xác thực đang hoạt động.

Mặc dù rất khó để xác định chính xác có bao nhiêu người được đề cử sẽ đề cử một trình xác nhận nhất định trong kỷ nguyên tiếp theo, nhưng người ta có thể ước tính dựa trên số lượng người được đề cử hiện tại. Ví dụ: một trình xác thực chỉ có 5 đề cử trong thời đại này, khó có thể có nhiều hơn {{polkadot_max_nominators}} trong kỷ nguyên tiếp theo. Tuy nhiên, một trình xác thực đã được đăng ký quá mức với 1000 người được đề cử trong thời đại này, cũng rất có thể bị đăng ký quá mức trong thời đại tiếp theo.

### Bộ Giải pháp Bầu cử

Việc xác định những trình xác thực nào trong tập hợp đang hoạt động và những đề cử nào đang đề cử chúng sẽ tạo ra những đề cử ánh xạ đồ thị rất lớn cho những trình xác nhận tương ứng của chúng. "Bộ giải pháp" này được tính toán ngoài chuỗi và được gửi đến chuỗi, có nghĩa là nó phải nằm gọn trong một khối duy nhất. Nếu có một số lượng lớn người được đề cử, điều này có nghĩa là một số người được đề cử phải bị loại bỏ. Hiện tại, những người được đề cử được sắp xếp theo số lượng DOT đặt cược và những người có nhiều DOT hơn được ưu tiên. Điều này có nghĩa là nếu bạn đặt cược với một lượng DOT nhỏ, bạn có thể không nhận được phần thưởng. Số tiền tối thiểu này là động dựa trên số lượng người xác nhận, số lượng người được đề cử, số lượng được đề cử và các yếu tố khác.

### Nhận phần thưởng

Miễn là bạn đã đề cử nhiều hơn một ứng cử viên xác thực, ít nhất một trong số họ đã được bầu và bạn đang đề cử với đủ cổ phần để tham gia bộ giải pháp, cổ phần ngoại quan của bạn sẽ được phân phối đầy đủ cho một hoặc nhiều người xác nhận. Điều đó đang được nói, bạn có thể không nhận được phần thưởng nếu bạn chỉ định rất ít ứng cử viên xác thực và không ai được bầu, hoặc số tiền của bạn nhỏ và bạn chỉ chọn những người xác thực đã đăng ký quá mức hoặc người xác thực bạn đang đề cử có 100% hoa hồng. Thông thường, bạn nên chọn càng nhiều người xác thực đáng tin cậy càng tốt (tối đa 16 người) để giảm nguy cơ không có người xác nhận nào được đề cử của bạn được bầu chọn.

Phần thưởng là *lazy* - ai đó phải kích hoạt thanh toán cho người xác thực để phần thưởng đi đến tất cả các đề cử của người xác nhận. Bất kỳ tài khoản nào cũng có thể làm điều này, mặc dù trong thực tế, các nhà khai thác trình xác thực thường làm điều này như một dịch vụ cho những người đề cử của họ. Xem trang [Simple Payouts](learn-simple-payouts.md) để biết thêm thông tin và hướng dẫn nhận phần thưởng.

### Cần Cân nhắc Điều gì Khi Đề cử

Một điều cần ghi nhớ với tư cách là người đề cử là hoa hồng của người xác nhận. Hoa hồng là tỷ lệ phần trăm của phần thưởng người xác nhận được người xác nhận thực hiện trước khi phần thưởng được chia cho những người được đề cử. Là một người được đề cử, bạn có thể nghĩ rằng mức hoa hồng thấp nhất là tốt nhất. Tuy nhiên, điều này không phải luôn luôn đúng. Trình xác thực phải có thể chạy ở mức hòa vốn để tiếp tục hoạt động bền vững. Người xác nhận độc lập dựa vào hoa hồng để trang trải chi phí máy chủ của họ giúp giữ cho mạng phi tập trung. Hoa hồng chỉ là một phần của câu đố mà bạn nên cân nhắc khi chọn người xác nhận để đề cử.

![Staking Returns](../assets/staking/polkadotjs_nominators_target.png)

Với tư cách là người đề cử, nếu bạn chỉ muốn biết lợi nhuận mà mỗi người xác thực tạo ra cho mỗi thời đại, bạn có thể chuyển đến phần [Targets](https://polkadot.js.org/apps/#/staking/targets) dưới trang đặt cược bằng cách nhập số lượng mã thông báo bạn muốn đặt cược để kiểm tra. Sau đó, đề cử những người có lợi nhuận cao hơn. Tuy nhiên, điều đó không đảm bảo cách đúng đắn để đánh giá hiệu suất tổng thể của trình xác nhận.

Xem xét "cổ phần riêng" của một trình xác nhận là cần thiết. Điều này đề cập đến số lượng DOT mà trình xác thực đã tự đặt ra. Số tiền "cược riêng" cao hơn có thể được coi là có nhiều "da trong trò chơi" hơn. Điều này có thể ngụ ý tăng độ tin cậy. Tuy nhiên, trình xác thực không có số lượng lớn "cổ phần riêng" không tự động không đáng tin cậy, vì trình xác nhận có thể được đề cử từ một địa chỉ khác.

### Lọc ra các trình xác thực có đặc điểm không mong muốn

Trên trang Targets, bạn có thể lọc ra những trình xác thực có những đặc điểm có thể chỉ ra vấn đề khi bạn đề cử họ. Bạn có thể tắt và bật các bộ lọc này để giúp thu hẹp trình xác thực nào bạn nên chỉ định. Điều quan trọng cần lưu ý là không có đặc điểm nào trong số những đặc điểm này nhất thiết là "xấu"; tuy nhiên, tùy thuộc vào phương pháp lựa chọn trình xác nhận của bạn, chúng có thể là những đặc điểm mà bạn muốn lọc ra.

- **Single from operator** - Không hiển thị các nhóm trình xác thực được điều hành bởi một toán tử duy nhất.
- **No 20%+ comm** - Không hiển thị bất kỳ trình xác thực nào có hoa hồng từ 20% trở lên.
- **No at capacity** - Không hiển thị bất kỳ trình xác thực nào hiện đang hoạt động hết công suất
  ([at capacity](../general/glossary.md#capacity)) (i.e., có thể có khả năng bị đăng ký quá mức).
- **Recent payouts** - Chỉ hiển thị các trình xác thực gần đây đã khiến một khoản thanh toán được phát hành.
  ([payout to be issued](learn-simple-payouts.md)). Lưu ý rằng bất kỳ ai cũng có thể khiến một khoản thanh toán xảy ra; nó không cần phải là nhà điều hành của trình xác nhận.
- **Only elected** - Chỉ hiển thị những người xác thực hiện đang ở trong nhóm đang hoạt động (tức là họ đã được bầu để tạo ra các khối trong thời đại này).
- **Only with an identity** - Chỉ hiển thị những trình xác thực đã đặt một danh tính ([identity](learn-identity.md)).
  Lưu ý rằng danh tính này không phải được tổ chức đăng ký tên miền xác minh để trình xác thực hiển thị trong danh sách.

### Xem lại lịch sử trình xác thực của bạn

Cách trình xác nhận đã hành động trong quá khứ có thể là một chỉ báo tốt về cách họ sẽ hành động trong tương lai. Một ví dụ về hành vi có vấn đề sẽ là nếu người xác thực thường xuyên ngoại tuyến, những người được đề cử của họ rất có thể sẽ nhận được ít phần thưởng hơn những người khác. Quan trọng hơn, khi nhiều người xác nhận không thể truy cập được ([unreachable](learn-staking.md#unresponsiveness)), những người được đề cử đặt cược với họ sẽ bị cắt.

![Validator Stats](../assets/staking/polkadotjs_validator_stats.png)

Do đó, để trở thành một nhà đề cử thông minh, tốt hơn là bạn nên truy vấn lịch sử của họ ([histories](https://polkadot.js.org/apps/#/staking/query/)) để xem các số liệu thống kê như các khối được tạo ra, phần thưởng và dấu gạch chéo và danh tính ([identity](learn-identity.md)) (nếu họ đã đặt nó). Hơn nữa, người đề cử nên nghiên cứu toàn diện về các ứng cử viên trình xác thực của họ - họ nên xem qua trang web của người xác nhận để xem họ là ai, loại thiết lập cơ sở hạ tầng mà họ đang sử dụng, danh tiếng, tầm nhìn đằng sau trình xác nhận và hơn thế nữa.

### Nhận thức rủi ro của các nhà khai thác đơn lẻ với nhiều trình xác thực

Nhớ lại rằng chém là một hàm cộng; càng nhiều trình xác thực ngoại tuyến hoặc không tập trung trong một phiên nhất định, thì hình phạt càng khắc nghiệt. Vì trình xác thực được kiểm soát bởi một thực thể có nhiều nguy cơ bị lỗi "đồng bộ hóa" hơn, nên việc chỉ định họ ngụ ý rủi ro lớn hơn về việc cắt giảm lớn số tiền được chỉ định của bạn. Nói chung, sẽ an toàn hơn nếu chỉ định người xác nhận có hành vi độc lập với những người khác theo nhiều cách nhất có thể (phần cứng khác nhau, vị trí địa lý, chủ sở hữu, v.v.).

### Tránh trình xác thực được đăng ký quá mức

Nếu bạn không được đề cử với một số lượng lớn DOT, bạn nên cố gắng tránh các trình xác thực đã đăng ký quá mức ([oversubscribed](../general/glossary.md#oversubscribed)). Không phải lúc nào cũng dễ dàng tính toán xem trình xác thực đã chọn có bị đăng ký quá mức trong phiên tiếp theo hay không; một cách để tránh chọn trình xác thực có khả năng đăng ký quá mức là lọc ra bất kỳ trình xác thực nào có khả năng ([at capacity](../general/glossary.md#capacity)) trên trang Targets.

Cuối cùng, nếu bạn có một số lượng DOT rất nhỏ, bạn có thể không có đề cử của mình phù hợp với bộ bầu cử. Ánh xạ từ đề cử đến trình xác thực phải vừa với một khối duy nhất và nếu có quá nhiều đề cử, các đề cử có giá trị thấp nhất sẽ bị loại bỏ. Giá trị này rõ ràng là động và sẽ thay đổi theo thời gian. Nếu bạn xem xét số lượng đề cử thấp nhất đang xảy ra trên các trình xác thực hiện tại, bạn có thể biết rõ về số lượng DOT có thể sẽ cần thiết để đề cử của bạn kiếm được phần thưởng cho bạn. Bạn có thể đọc bài đăng trên blog ["Polkadot Staking: An Update"](https://polkadot.network/polkadot-staking-an-update/) để biết thêm chi tiết.

> Những khái niệm này đã được giải thích thêm trong
> [Why Nominate on Polkadot & Kusama video](https://www.youtube.com/watch?v=weG_uzdSs1E&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=4)
> và
> [What to Consider when Nominating Validators on Polkadot and Kusama](https://www.youtube.com/watch?v=K-a4CgVchvU&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=9)
> and
> [Nominating/Staking on Polkadot and Kusama](https://youtu.be/FCXC0CDhyS4)

### Guides

- [Be a Nominator (Polkadot)](../maintain/maintain-guides-how-to-nominate-polkadot.md) - Hướng dẫn về việc đề cử trên mạng  Kusama.
- [Stop Being a Nominator (all networks)](../maintain/maintain-guides-how-to-unbond.md) - Hướng dẫn về cách dừng đề cử và rút tiền mã thông báo.
