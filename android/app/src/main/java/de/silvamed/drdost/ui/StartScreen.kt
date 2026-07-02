package de.silvamed.drdost.ui

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Phone
import androidx.compose.material.icons.filled.Place
import androidx.compose.material.icons.filled.Schedule
import androidx.compose.material.icons.filled.Smartphone
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.unit.dp
import de.silvamed.drdost.content.Praxis
import de.silvamed.drdost.content.SiteContent

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun StartScreen(content: SiteContent) {
    Scaffold(topBar = { TopAppBar(title = { Text(content.praxis.brand) }) }) { padding ->
        LazyColumn(contentPadding = padding, modifier = Modifier.padding(horizontal = 16.dp)) {
            item {
                AssetImage(
                    path = content.arzt.portrait,
                    contentDescription = content.arzt.name,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(320.dp)
                        .clip(RoundedCornerShape(16.dp)),
                )
            }
            item {
                Text(
                    content.praxis.tagline,
                    style = MaterialTheme.typography.headlineSmall.copy(fontFamily = FontFamily.Serif),
                    modifier = Modifier.padding(top = 24.dp),
                )
            }
            item {
                Column(Modifier.padding(top = 16.dp)) {
                    Text(content.arzt.name, style = MaterialTheme.typography.titleMedium)
                    Text(
                        content.arzt.qualifications,
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }
            }
            items((content.arzt.intro + content.arzt.bio).size) { i ->
                Text((content.arzt.intro + content.arzt.bio)[i], Modifier.padding(top = 16.dp))
            }
            item { KontaktCard(content.praxis, Modifier.padding(top = 24.dp)) }
            item { Spacer(Modifier.height(24.dp)) }
        }
    }
}

@Composable
fun KontaktCard(praxis: Praxis, modifier: Modifier = Modifier) {
    val context = LocalContext.current
    ElevatedCard(modifier.fillMaxWidth()) {
        Column(Modifier.padding(16.dp)) {
            Text(
                "Kontakt",
                style = MaterialTheme.typography.titleLarge.copy(fontFamily = FontFamily.Serif),
                modifier = Modifier.padding(bottom = 8.dp),
            )
            ContactRow(Icons.Filled.Place, "Adresse", praxis.address) { context.openMaps(praxis.address) }
            ContactRow(Icons.Filled.Phone, "Telefon", praxis.phone) { context.dial(praxis.phone) }
            ContactRow(Icons.Filled.Smartphone, "Mobil", praxis.mobile) { context.dial(praxis.mobile) }
            ContactRow(Icons.Filled.Email, "E-Mail", praxis.email) { context.emailTo(praxis.email) }
            ContactRow(Icons.Filled.Schedule, "Sprechzeiten", praxis.hours, action = null)
        }
    }
}
