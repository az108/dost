package de.silvamed.drdost.ui

import android.content.Context
import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp
import androidx.core.net.toUri
import de.silvamed.drdost.content.ContactValue

fun Context.dial(number: String) {
    val digits = number.filter { it.isDigit() || it == '+' }
    startActivity(Intent(Intent.ACTION_DIAL, "tel:$digits".toUri()))
}

fun Context.emailTo(address: String) {
    startActivity(Intent(Intent.ACTION_SENDTO, "mailto:$address".toUri()))
}

fun Context.openMaps(query: String) {
    startActivity(Intent(Intent.ACTION_VIEW, ("geo:0,0?q=" + Uri.encode(query)).toUri()))
}

/** A labelled contact row that is tappable only for real (non-placeholder) values. */
@Composable
fun ContactRow(icon: ImageVector, label: String, value: String, action: (() -> Unit)?) {
    val enabled = action != null && ContactValue.isReal(value)
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .then(if (enabled) Modifier.clickable { action?.invoke() } else Modifier)
            .padding(vertical = 4.dp),
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Icon(
            icon,
            contentDescription = null,
            tint = if (enabled) MaterialTheme.colorScheme.primary
                   else MaterialTheme.colorScheme.onSurfaceVariant,
        )
        Column {
            Text(label, style = MaterialTheme.typography.labelSmall,
                 color = MaterialTheme.colorScheme.onSurfaceVariant)
            Text(value, color = if (enabled) MaterialTheme.colorScheme.primary
                                else MaterialTheme.colorScheme.onSurface)
        }
    }
}
