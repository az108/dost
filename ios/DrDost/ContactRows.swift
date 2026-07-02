import SwiftUI
import DrDostKit

enum ContactActions {
    static func telURL(_ number: String) -> URL? {
        let digits = number.filter { $0.isNumber || $0 == "+" }
        return digits.isEmpty ? nil : URL(string: "tel:\(digits)")
    }

    static func mailURL(_ address: String) -> URL? {
        URL(string: "mailto:\(address)")
    }

    static func mapsURL(_ address: String) -> URL? {
        guard let q = address.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)
        else { return nil }
        return URL(string: "maps://?q=\(q)")
    }
}

/// A labelled contact row that is tappable only for real (non-placeholder) values.
struct ContactRow: View {
    let icon: String
    let label: String
    let value: String
    let url: (String) -> URL?

    var body: some View {
        if ContactValue.isReal(value), let destination = url(value) {
            Link(destination: destination) { row }
        } else {
            row.foregroundStyle(.secondary)
        }
    }

    private var row: some View {
        Label {
            VStack(alignment: .leading, spacing: 2) {
                Text(label).font(.caption).foregroundStyle(.secondary)
                Text(value)
            }
        } icon: {
            Image(systemName: icon)
        }
    }
}
