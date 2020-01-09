$(function () {
    $("#spendAmount").click(function () {
        chrome.storage.sync.get('total', function (budget) {
            var newTotel = 0;
            if (budget.total) {
                newTotel += parseInt(budget.total);
            }

            var amount = $('amount').val();
            if (amount) {
                newTotel += parseInt(amount);
            }

            chrome.storage.sync.set({ 'total': newTotel });

            $('#total').text(newTotel);
            $('#amount')
        })
    })
})